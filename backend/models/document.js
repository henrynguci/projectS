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
        },
        fileSize: {
            type: Number,
            required: true
        },
        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        uploadDate: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Document', documentSchema);
