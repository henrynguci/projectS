
import pool from "../config/db.js";
import * as printOrderQueries from "../services/printOrder.service.js"

export const getAllPrintOrders = (req, res) => {
    pool.query(printOrderQueries.getAllPrintOrders, (error, results) => {
        if (results.rows.length === 0) {
            return res.send("There is no print order in the db!!");
        }

        res.status(200).json(results.rows);
    });
};

export const getPrintOrderById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(printOrderQueries.getPrintOrderById, [id], (error, results) => {
        if (error) throw error;

        if (results.rows.length === 0) {
            return res.send("This print order doesn't exist in the db!!!");
        }

        res.status(200).json(results.rows);
    })
};

export const addPrintOrder = (req, res) => {
    const { doc_id, Pstatus } = req.body;
    pool.query(printOrderQueries.addPrintOrder, [doc_id, Pstatus], (error, results) => {
        if (error) throw error;
        res.status(201).send('Add print order successfully!!');
    })
};

export const deletePrintOrder = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(printOrderQueries.getPrintOrderById, [id], (error, results) => {

        if (results.rows.length === 0) {
            return res.send("This print order doesn't exist in the db!!!");
        }

        pool.query(printOrderQueries.deletePrintOrder, [id], (error, results) => {
            if (error) throw error;

            res.status(200).send("Deleted print order successfully!!");
        })
    })
};

export const updatePrintOrder = async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await pool.query("SELECT CURRENT_TIMESTAMP as end_at");
    req.body.end_at = result.rows[0].end_at;
    const { end_at, Pstatus } = req.body;
    pool.query(printOrderQueries.getPrintOrderById, [id], (error, results) => {
        if (results.rows.length === 0) {
            return res.send("print order doesn't exist in the db!!!")
        }

        pool.query(printOrderQueries.updatePrintOrder, [end_at, Pstatus, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("print order updated successfully.");
        })
    })
};