const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './config/.env'});

const PORT = process.env.PORT || 3000;

const app = express();
app.listen(PORT, () => {
    console.log(`Meili server is running in ${process.env.NODE_ENV} on port ${PORT}`)
});