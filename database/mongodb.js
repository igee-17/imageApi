const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));

// Create a mongoose schema and model for the image
const ImageSchema = new mongoose.Schema({
    filename: String,
    filePath: String,
});

const ImageModel = mongoose.model('Image', ImageSchema);

module.exports = { mongoose, ImageModel };
