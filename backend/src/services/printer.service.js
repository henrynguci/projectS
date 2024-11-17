import { query } from "../config/db.js"

export const addPrinter = async ({name, brand, model, campus, room, building}) => {
    try {
        const result = await query(
            'INSERT INTO printers (name, brand, model, campus, room, building) VALUES ($1, $2, $3, $4, $5, $6)', 
            [ name, brand, model, campus, room, building ],
        );
        return result;
    } catch (error) {
        throw error;
    }
}

export const changeState = async (id, state) => {
    try {
        const result = await query(
            'UPDATE printers SET state = $1 WHERE id = $2', 
            [id, state]
        );
        return result;
    } catch (error) {
        throw error;
    }
}

export const getPrinters = async () => {
    try {
        const printers = await query('SELECT * FROM printers')
        return printers.rows;
    } catch (error) {
        throw error;
    }
}

export const updateInfo = async (id, {brand, model, campus, room, building}) => {
    try {
        const result = await query(
            'UPDATE printers SET brand = $1, model = $2, campus = $3, room = $4, building = $5 WHERE printer_id = $6',
            [brand, model, campus, room, building, id]
        );
        return result;
    } catch (error) {
        throw error
    }
}