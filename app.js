require("dotenv").config();
const express = require('express');

const { uploadImage, getImage } = require("./controllers/imageController");

const app = express();
const port = `${process.env.PORT}` || 8000;

// Upload endpoint with image file validation
app.post('/upload', uploadImage);

// GET image endpoint
app.get('/get_image/:id', getImage);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
