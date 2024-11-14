import { query } from "../config/db.js"


export const getNotify = async (user_id) => {
    try {
        const result = await query("SELECT * FROM notifications WHERE user_id = $1" [user_id])
        return result.rows;
    } catch (error) {
        throw error;
    }
}

export const viewNotify = async (id) => {
    try {
        const result = await query("UPDATE notifications SET status = 'read' WHERE notify_id =  $1", [id] )
        return result;
    } catch (error) {
        throw error;
    }
}

export const deleteNotify = async (id) => {
    try {
        const result = await query('DELETE FROM notifications WHERE notify_id = $1', [id])
        return result;
    } catch (error) {
        throw error;
    }
}
