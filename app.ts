import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { uploadImage, getImage } from "./controllers/imageController";

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;

// Upload endpoint with image file validation
app.post("/upload", uploadImage);

// GET image endpoint
app.get("/get_image/:id", getImage);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
