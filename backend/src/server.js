import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import colors from 'colors';
import route from './routes/index.route.js';
dotenv.config();

// Connect to database

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
route(app);

app.get('/', (req, res) => {
    res.send('API is running...');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
