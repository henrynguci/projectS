import * as reportService from '../services/report.service.js'

export const countOrderInYear = async (req, res) => {
    try {
        const result = await reportService.countOrderInYear(req.params.year);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500);
    }
}