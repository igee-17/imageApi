import { Request, Express } from "express";
import { FileFilterCallback } from "multer";
import path from "path";

const imageFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only image files with extensions .jpg, .jpeg, .png, .gif are allowed."
      )
    );
  }
};

export { imageFilter };
