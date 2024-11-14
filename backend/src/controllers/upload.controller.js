import * as uploadService from '../services/upload.service.js';

export const upload = async (req, res) => {
    try {
        await uploadService.uploadFile(req.file, req.id);

        return res.status(200).json({
            message: "OK!",
        });
    } catch (error) {
        console.error(error);
        return res.status(500);
    }
}