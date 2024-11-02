import express from "express";
import pool from "../config/db.js";
import * as documentQueries from '../services/document.service.js';

export const addDocument = (req, res) => {
    const { name, file_type, number_pages } = req.body;
    pool.query(documentQueries.addDocument,
        [name, file_type, number_pages], (error, results) => {
            if (error) throw error;
            res.status(201).send('Add document successful!!!')
        })
};

export const getDocumentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(documentQueries.getDocumentById, [id], (error, results) => {
        if (error) throw error;

        if (results.rows.length === 0) {
            return res.send("Document doesn't exist in the db");
        }

        res.status(200).json(results.rows);
    })
};

export const getDocuments = (req, res) => {
    pool.query(documentQueries.getDocuments, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

export const deleteDocument = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(documentQueries.getDocumentById, [id], (error, results) => {
        if (results.rows.length === 0) {
            return res.send("Document doesn't exist in the db!!!")
        }

        pool.query(documentQueries.deleteDocument, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Document removed successfully.");
        })
    })
};

export const updateDocument = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, file_type, number_pages } = req.body;
    pool.query(documentQueries.getDocumentById, [id], (error, results) => {
        if (results.rows.length === 0) {
            return res.send("Document doesn't exist in the db!!!")
        }

        pool.query(documentQueries.updateDocument, [name, file_type, number_pages, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Document updated successfully.");
        })
    })
};