import { query } from "../config/db.js"

export const addPrinter = async ({name, brand, model, campus, room, building}) => {
    try {
        const res = await query(
            'insert into printers (name, brand, model, campus, room, building) values ($1, $2, $3, $4, $5, $6)', 
            [ name, brand, model, campus, room, building ],
        );
        return res;
    } catch (error) {
        throw error;
    }
}

export const changeState = async (id, state) => {
    try {
        const res = await query(
            'update printers set state = $1 where id = $2', 
            [id, state]
        );
        return res;
    } catch (error) {
        throw error;
    }
}

export const getPrinters = async () => {
    try {
        const printers = await query('select * from printers')
        return printers.rows;
    } catch (error) {
        throw error;
    }
}

export const updateInfo = async ({id, brand, model, campus, room, building}) => {
    try {
        const res = await query(
            'update printers set brand = $1, model = $2, campus = $3, room = $4, building = $5 where printer_id = $6',
            [brand, model, campus, room, building, id]
        );
        return res;
    } catch (error) {
    
    }
}