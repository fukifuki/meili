const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// route files
const guides = require('./routes/guides');

dotenv.config({path: './config/.env'});
const PORT = process.env.PORT || 3000;

const app = express();
// mount routers
app.use('/api/v1/guides', guides);
// connect to database
connectDB();

app.listen(
    PORT,
    () => {
    console.log(`Meili server is running in ${process.env.NODE_ENV} on port ${PORT}`)
});
