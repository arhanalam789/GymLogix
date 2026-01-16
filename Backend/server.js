require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


connectDB();

const app = express();


app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'x-auth-token']
}));


const authRoutes = require('./routes/auth');
const goalRoutes = require('./routes/goals');


app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Backend is reachable' }));

app.use('/api/auth', authRoutes);
app.use('/api/goals', goalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
