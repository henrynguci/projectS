import { google } from "googleapis";
import { query } from "../config/db.js";
import fs from "fs";
import path from "path";
// import pdf from 'pdf-parse';
import { config } from "dotenv";

config();

const file_type = JSON.parse(fs.readFileSync('./src/config/file_type.json', 'utf-8'));

const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const SCOPE = process.env.SCOPE;

const jwtClient = new google.auth.JWT(CLIENT_EMAIL, null, PRIVATE_KEY, [SCOPE]);
jwtClient.authorize();

const drive = google.drive({
    version: "v3",
    auth: jwtClient,
});

export const uploadFile = async (file, user_id) => {
    try {
        //add file to google drive
        const createFile = await drive.files.create({
            requestBody: {
                name: file.filename,
                mimeType: file.mimetype,
                parents: [process.env.FOLDER_ID],
            },
            media: {
                mimeType: file.mimetype,
                body: fs.createReadStream(`./src/${file.filename}`),
            },
            fields: "id, webViewLink, webContentLink",
        });
        console.log(createFile.data);

        //set permission
        await drive.permissions.create({
            fileId: createFile.data.id,
            requestBody: {
                role: "reader",
                type: "anyone",
            },
        });

        //count num_pages
        let numPages = 1;
        // if(file_type[file.mimeType] === 'pdf'){
        //     const fileBuffer = fs.readFileSync(path.join(__dirname, `../${file.filename}`))
        //     const data = await pdf(fileBuffer);
        //     numPages = data.numpages
        // }
        
        //add file to db
        await query(
            "INSERT INTO documents (document_id, name, file_type, number_of_pages, user_id) VALUES ($1, $2, $3, $4, $5)",
            [createFile.data.id, file.filename, file_type[file.mimetype], numPages, user_id]
        );

    } catch (error) {
        throw error

    } finally {
        //delete file in source code
        await fs.promises.unlink(`./src/${file.filename}`);
    }
};

export const deleteFile = async (document_id) => {
    try {
        await query("DELETE FROM documents WHERE document_id = $1", [document_id])
        await drive.files.delete({
            fileId: document_id,
        });
    } catch (error) {
        throw error;
    }
}
