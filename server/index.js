const express = require('express')
const app = express()
const mongoose = require('mongoose')

require("dotenv").config()

// connect to db
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to db'))
    .catch((error) => console.log('Failed to connect', error));

// health api
app.get('/health', (req, res) => {
    res.json({
        service: 'Job Listing Server',
        status: 'Active',
        time: new Date(),
    });
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (!err) {
        console.log(`Example app listening on port ${port}`)
    } else {
        console.log('error connecting to db')
    }
})