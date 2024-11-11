// const multer = require('multer')
// const path = require('path')
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, path.join(__dirname, '..'))
    },
    filename: (req, file, cb) => {
        return cb(null, `${file.originalname}`)
    }
})

const upload = multer({storage})

export default upload;
