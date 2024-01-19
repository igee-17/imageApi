const path = require('path');

const imageFilter = (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files with extensions .jpg, .jpeg, .png, .gif are allowed.'));
    }
};

module.exports = { imageFilter }