const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema(
    {
        documentID: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        fileType: {
            type: String,
            required: true,
            enum: ['pdf', 'doc', 'docx']
        },
        numberOfPages: {
            type: Number,
            required: true,
            min: 1
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Document', documentSchema);
