
import pool from "../config/db.js";
import * as pageOrderQueries from "../services/pageOrder.service.js"

export const getAllPageOrders = (req, res) => {
    pool.query(pageOrderQueries.getAllPageOrders, (error, results) => {
        if (results.rows.length === 0) {
            return res.send("There is no page order in the db!!");
        }

        res.status(200).json(results.rows);
    });
};

export const getPageOrderById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(pageOrderQueries.getPageOrderById, [id], (error, results) => {
        if (error) throw error;

        if (results.rows.length === 0) {
            return res.send("This page order doesn't exist in the db!!!");
        }

        res.status(200).json(results.rows);
    })
};

export const addPageOrder = (req, res) => {
    const { number_A4pages } = req.body;
    pool.query(pageOrderQueries.addPageOrder, [number_A4pages], (error, results) => {
        if (error) throw error;
        res.status(201).send('Add page order successfully!!');
    })
};

export const deletePageOrder = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(pageOrderQueries.getPageOrderById, [id], (error, results) => {

        if (results.rows.length === 0) {
            return res.send("This page order doesn't exist in the db!!!");
        }

        pool.query(pageOrderQueries.deletePageOrder, [id], (error, results) => {
            if (error) throw error;

            res.status(200).send("Deleted page order successfully!!");
        })
    })
};
