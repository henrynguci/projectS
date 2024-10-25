import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import connectDB from './config/db.js';
import colors from 'colors';

// models
import documentSchema from './models/document.js';
import feedbackSchema from './models/feedback.js';
import notificationSchema from './models/notification.js';
import pageOrderSchema from './models/pageOrder.js';
import printerSchema from './models/printer.js';
import printOrderSchema from './models/printOrder.js';
import spsoSchema from './models/spso.js';
import userSchema from './models/user.js';

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// CRUD
// Create
app.post('/api/documents', async (req, res) => {
    try {
        const document = await documentSchema.create(req.body);
        res.status(201).json({ document });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/api/feedbacks', async (req, res) => {
    try {
        const feedback = await feedbackSchema.create(req.body);
        res.status(201).json({ feedback });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/api/notifications', async (req, res) => {
    try {
        const notification = await notificationSchema.create(req.body);
        res.status(201).json({ notification });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/api/pageOrders', async (req, res) => {
    try {
        const pageOrder = await pageOrderSchema.create(req.body);
        res.status(201).json({ pageOrder });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.yellow.bold);
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
