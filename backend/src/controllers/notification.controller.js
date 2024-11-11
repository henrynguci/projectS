import * as notificationService  from '../services/notification.service.js';

export const getNotify = async (req, res) => {
    try {
        const result = await notificationService.getNotify(req.id)
        return res.stauts(200).json(result)
    } catch (error) {
        console.error(error);
        return res.status(500);
    }
}

export const viewNotify = async (req, res) => {
    try {
        await notificationService.viewNotify(req.body.id)
        return res.status(200)
    } catch (error) {
        console.error(error);
        return res.status(500)
    }
}

export const deleteNotify = async (req, res) => {
    try {
        await notificationService.deleteNotify(req.param.id)
        return res.status(200)
    } catch (error) {
        console.error(error);
        return res.status(500)
    }
}