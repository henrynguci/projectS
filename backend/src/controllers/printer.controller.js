import * as printerService  from '../services/printer.service.js';

export const addPrinter = async (req, res) => {
    try {
        const dataForm = req.body;
        await printerService.addPrinter(dataForm);
        return res.status(200).json();
    } catch (error) {
        console.error(error);
        return res.status(500);
    } 
}

export const getPrinters = async (req, res) => {
    try {
        const printers = await printerService.getPrinters()
        return res.status(200).json(printers);
    } catch (error) {
        console.error(error);
        return res.status(500)
    }
}

export const changeState = async (req, res) => {
    try {
        await printerService.changeState(req.body.id, req.body.status);
    } catch (error) {
        console.error(error);
        return res.status(500);
    }
}