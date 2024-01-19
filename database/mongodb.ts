import mongoose, { Document, Model } from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// Define the image document interface
interface IImage extends Document {
  filename: string;
  filePath: string;
}

// Create a mongoose schema and model for the image
const ImageSchema = new mongoose.Schema({
  filename: String,
  filePath: String,
});

const ImageModel: Model<IImage> = mongoose.model<IImage>("Image", ImageSchema);

export { mongoose, ImageModel, IImage };
