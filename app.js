const express = require('express');
const connectDB = require('./config/db');
const insightRoutes = require('./routes/insightRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api', insightRoutes);

app.use(errorHandler);

module.exports = app;
