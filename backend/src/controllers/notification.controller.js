import * as notificationService  from '../services/notification.service.js';

export const getNotify = async (req, res) => {
    try {
        const notify = await notificationService.getNotify(req.param.user_id)
        return res.stauts(200).json(notify)
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