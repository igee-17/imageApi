const multer = require("multer");
const { imageFilter } = require("../middleware/imageMiddleware");
const path = require('path');
const { ImageModel, mongoose } = require("../database/mongodb");
const fs = require('fs');

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = Date.now() + ext;
        cb(null, filename);
    },
});

const upload = multer({ storage, fileFilter: imageFilter });


exports.uploadImage = async (req, res) => {
    upload.single('image')(req, res, async (err) => {
        if (err) {
            console.error('Multer error:', err);
            return res.status(400).json({ success: false, status: 400, message: 'Error during file upload', error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ success: false, status: 400, message: 'No file uploaded.' });
        }

        try {
            const image = new ImageModel({
                filename: req.file.filename,
                filePath: req.file.path,
            });

            const savedImage = await image.save();

            // Build the download URL based on your server configuration
            const downloadUrl = `${process.env.BASE_URL}/get_image/${savedImage._id}`;

            // Return details about the uploaded image
            res.status(201).json({
                success: true,
                status: 201,
                id: savedImage._id,
                filename: savedImage.filename,
                downloadUrl,
                message: 'Image uploaded successfully',
            });
        } catch (error) {
            if (error instanceof multer.MulterError) {
                // Multer error (e.g., file size exceeded)
                res.status(400).json({ success: false, status: 400, error: error.message, message: 'Error during file upload' });
            } else if (error.message.startsWith('Only image files')) {
                // Custom imageFilter error
                res.status(400).json({ success: false, status: 400, error: error.message, message: 'Invalid image file' });
            } else if (error.code === 11000 && error.keyPattern && error.keyPattern.filename === 1) {
                // users uploading files with the same name
                res.status(400).json({ success: false, status: 400, error: 'Duplicate file name', message: 'A file with the same name already exists' });
            } else {
                console.error(error);
                res.status(500).json({ success: false, status: 500, error: 'Internal Server Error', message: 'Server encountered an error' });
            }
        }
    });
};

exports.getImage = async (req, res) => {
    const { id } = req.params;

    // Validate if id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ status: 400, message: 'Invalid image ID', success: false });
    }

    try {
        const image = await ImageModel.findById(id);

        if (!image) {
            return res.status(404).json({ status: 404, message: 'Image not found', success: false });
        }

        // Assuming the file is stored in the 'uploads' directory
        const fileStream = fs.createReadStream(image.filePath);
        fileStream.pipe(res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, message: 'Internal Server Error', success: false });
    }
};
