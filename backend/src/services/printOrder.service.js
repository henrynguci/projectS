

import { query } from "../config/db.js";

export const addPrintOrder = async ({ user_id, document_id, printer_id, sided, paper_size, paper_orientation, pages_per_sheet, number_of_copies, p_state, scale }) => {
    try {
        const result = await query(
            "INSERT INTO print_orders ( user_id, document_id, printer_id, sided, paper_size, paper_orientation, pages_per_sheet, number_of_copies, p_state, scale) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
            [user_id, document_id, printer_id, sided, paper_size, paper_orientation, pages_per_sheet, number_of_copies, p_state, scale]
        );
        return result;
    } catch (error) {
        throw error;
    }
}

export const getAllPrintOrders = async () => {
    try {
        const result = await query("SELECT * FROM print_orders");
        return result.rows;
    } catch (error) {
        throw error;
    }
}

export const getPrintOrderById = async (id) => {
    try {
        const result = await query("SELECT * FROM print_orders WHERE id = $1", [id]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

export const getPrintOrderByUserid = async (id) => {
    try {
        const result = await query("SELECT * FROM print_orders WHERE user_id = $1", [id]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

export const changeState = async ({ id, p_state }) => {
    try {
        if (p_state === 'completed') {
            const get_current_time = await query("SELECT CURRENT_TIMESTAMP as end_at");
            const end_at = get_current_time.rows[0].end_at;
            const result = await query("UPDATE print_orders SET end_at = $1, p_state = $2 WHERE id = $3", [end_at, p_state, id]);
            return result;
        }
        const result = await query("UPDATE print_orders SET p_state = $1 WHERE id = $2", [p_state, id]);
        return result;
    } catch (error) {
        throw error;
    }
}

export const deletePrintOrder = async (id) => {
    try {
        const result = await query("DELETE FROM print_orders WHERE id = $1", [id]);
        return result;
    } catch (error) {
        throw error;
    }
}