
import pool from "../config/db.js";
import * as feedbackQueries from "../services/feedback.service.js";

export const getAllFeedback = (req, res) => {
    pool.query(feedbackQueries.getAllFeedbacks, (error, results) => {
        if (results.rows.length === 0) {
            return res.send("There is no feedback in the db!!");
        }

        res.status(200).json(results.rows);
    });
};

export const getFeedbackById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(feedbackQueries.getFeedbackById, [id], (error, results) => {
        if (error) throw error;

        if (results.rows.length === 0) {
            return res.send("This feedbak doesn't exist in the db!!!");
        }

        res.status(200).json(results.rows);
    })
};

export const addFeedback = (req, res) => {
    const { message, rating } = req.body;
    pool.query(feedbackQueries.addFeedback, [message, rating], (error, results) => {
        if (error) throw error;
        res.status(201).send('Add feedback successfully!!');
    })
};

export const deleteFeedback = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(feedbackQueries.getFeedbackById, [id], (error, results) => {

        if (results.rows.length === 0) {
            return res.send("This feedbak doesn't exist in the db!!!");
        }

        pool.query(feedbackQueries.deleteFeedback, [id], (error, results) => {
            if (error) throw error;

            res.status(200).send("Deleted feedback successfully!!");
        })
    })
};
