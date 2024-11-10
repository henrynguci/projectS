import { query } from "../config/db.js"


export const getNotify = async (user_id) => {
    try {
        const res = await query("select * from notifications where user_id = $1" [user_id])
        return res.rows;
    } catch (error) {
        throw error;
    }
}

export const viewNotify = async (id) => {
    try {
        const res = await query("update notifications set status = 'read' where notify_id =  $1", [id] )
        return res;
    } catch (error) {
        throw error;
    }
}

export const deleteNotify = async (id) => {
    try {
        const res = await query('detele from notifications where notify_id = $1', [id])
        return res;
    } catch (error) {
        throw error;
    }
}
