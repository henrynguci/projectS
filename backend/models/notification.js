const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
    {
        notificationID: {
            type: String,
            required: true,
            unique: true
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content: {
            type: String,
            required: true
        },
        sentTime: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ['unread', 'read'],
            default: 'unread'
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Notification', notificationSchema);
