# NOTICE!! - .env FILE IS REQUIRED TO RUN APPLICATION!!

## KINDLY FIND ENV FILE ATTACHED IN SUBMISSION EMAIL

### Prerequisites:

- **Node.js and npm:** Make sure you have Node.js and npm installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

- **MongoDB:** Ensure that MongoDB is installed and running. You can download MongoDB from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).

### Steps to Run the Application:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

   ```

2) **Install Dependencies:**

   ```bash
   npm install

   ```

3) **Set Up Environment Variables:**

- Create a .env file in the root directory.
- Add the following environment variables to the file:

  ```json
      PORT=8000
      MONGO_URI=<your-mongodb-uri>
      BASE_URL=http://localhost:8000
  ```

4. **Start the Application:**

   ```bash
   npm start

   ```

5. **Testing Endpoints:**

- Image Upload Endpoint: POST http://localhost:8000/upload
- Get Image Endpoint: GET http://localhost:8000/get_image/:id
- You can use tools like curl, Postman, or Insomnia to test the API endpoints.

### Additional Notes:

- Ensure that MongoDB is running before starting the application, as it requires a connection to the database.
- The application will run on the specified port (8000 by default). Make sure the port is available and not in use by other applications.
- Adjust the MongoDB URI and other environment variables in the .env file based on your setup.

## Image Upload API

## Endpoint:

POST /upload

## Request Parameters:

- Request Type: multipart/form-data
- Field Name: image
- Description: The image file to be uploaded.

## Responses:

Success Response:

- Status Code: 201 Created
- Body:

  ```json
  {
    "success": true,
    "status": 201,
    "id": "5fec8b79e1e4f4001706b4c1",
    "filename": "example.jpg",
    "downloadUrl": "http://your-base-url/get_image/5fec8b79e1e4f4001706b4c1",
    "message": "Image uploaded successfully"
  }
  ```

Error Responses:

- Status Code: 400 Bad Request
- Body:

  ```json
  {
    "success": false,
    "status": 400,
    "error": "Error message",
    "message": "Error during file upload"
  }
  ```

- Status Code: 400 Bad Request
- Body:

  ```json
  {
    "success": false,
    "status": 400,
    "message": "No file uploaded."
  }
  ```

- Status Code: 400 Bad Request
- Body:

  ```json
  {
    "success": false,
    "status": 400,
    "error": "Error message",
    "message": "Invalid image file"
  }
  ```

- Status Code: 400 Bad Request
- Body:

  ```json
  {
    "success": false,
    "status": 400,
    "error": "Duplicate file name",
    "message": "A file with the same name already exists"
  }
  ```

- Status Code: 500 Internal Server Error
- Body:
  ```json
  {
    "success": false,
    "status": 500,
    "error": "Internal Server Error",
    "message": "Server encountered an error"
  }
  ```

## Get Image API

## Endpoint:

GET /get_image/:id

## Request Parameters:

- Path Parameter: id
  - Type: String (MongoDB ObjectId)
  - Description: The unique identifier of the uploaded image.

## Responses:

Success Response:

- Status Code: 200 OK
- Body: (Binary data of the image file)

Error Responses:

- Status Code: 400 Bad Request
- Body:
  ```json
  {
    "success": false,
    "status": 400,
    "message": "Invalid image ID"
  }
  ```
- Status Code: 404 Not Found
- Body:
  ```json
  {
    "success": false,
    "status": 404,
    "message": "Image not found"
  }
  ```
- Status Code: 500 Internal Server Error
- Body:
  ```json
  {
    "success": false,
    "status": 500,
    "message": "Internal Server Error"
  }
  ```
