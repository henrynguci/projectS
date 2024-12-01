// src/middleware/upload.middleware.js
import { SPACES_CONFIG } from '../config/spaces.config.js';

export const fileValidation = {
    // Kiểm tra mime type
    checkFileType: (file) => {
        return SPACES_CONFIG.ALLOWED_FILE_TYPES.includes(file.mimetype);
    },

    // Kiểm tra kích thước file
    checkFileSize: (file) => {
        return file.size <= SPACES_CONFIG.MAX_FILE_SIZE;
    },

    // Kiểm tra tên file
    sanitizeFileName: (fileName) => {
        return fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    }
};

// Middleware xử lý lỗi upload
export const handleUploadError = (err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: true,
            message: `Upload error: ${err.message}`
        });
    }
    next(err);
};

// Middleware kiểm tra file trước khi upload
export const validateFile = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({
            error: true,
            message: 'No file uploaded'
        });
    }

    if (!fileValidation.checkFileType(req.file)) {
        return res.status(400).json({
            error: true,
            message: 'File type not allowed'
        });
    }

    if (!fileValidation.checkFileSize(req.file)) {
        return res.status(400).json({
            error: true,
            message: 'File size exceeds limit'
        });
    }

    next();
};
