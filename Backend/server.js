require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


connectDB();

const app = express();


app.use(express.json());


const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5001',
    /\.vercel\.app$/, 
    'https://gym-logix.vercel.app',
    'https://gym-logix-three.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        
        if (!origin) return callback(null, true);

        const isAllowed = allowedOrigins.some(allowedOrigin => {
            if (allowedOrigin instanceof RegExp) {
                return allowedOrigin.test(origin);
            }
            return allowedOrigin === origin;
        });

        if (isAllowed) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'x-auth-token'],
    credentials: true
}));


const authRoutes = require('./routes/auth');
const goalRoutes = require('./routes/goals');


app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Backend is reachable' }));

app.use('/api/auth', authRoutes);
app.use('/api/goals', goalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
