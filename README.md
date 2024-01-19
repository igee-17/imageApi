Image Upload API
Endpoint:
bash
Copy code
POST /upload
Request Parameters:
Request Type: multipart/form-data
Field Name: image
Description: The image file to be uploaded.
Responses:
Success Response:
Status Code: 201 Created
Body:
json
Copy code
{
"success": true,
"status": 201,
"id": "5fec8b79e1e4f4001706b4c1",
"filename": "example.jpg",
"downloadUrl": "http://your-base-url/get_image/5fec8b79e1e4f4001706b4c1",
"message": "Image uploaded successfully"
}
Error Responses:
Status Code: 400 Bad Request
Body:
json
Copy code
{
"success": false,
"status": 400,
"error": "Error message",
"message": "Error during file upload"
}
Status Code: 400 Bad Request
Body:
json
Copy code
{
"success": false,
"status": 400,
"message": "No file uploaded."
}
Status Code: 400 Bad Request
Body:
json
Copy code
{
"success": false,
"status": 400,
"error": "Error message",
"message": "Invalid image file"
}
Status Code: 400 Bad Request
Body:
json
Copy code
{
"success": false,
"status": 400,
"error": "Duplicate file name",
"message": "A file with the same name already exists"
}
Status Code: 500 Internal Server Error
Body:
json
Copy code
{
"success": false,
"status": 500,
"error": "Internal Server Error",
"message": "Server encountered an error"
}
Get Image API
Endpoint:
bash
Copy code
GET /get_image/:id
Request Parameters:
Path Parameter: id
Type: String (MongoDB ObjectId)
Description: The unique identifier of the uploaded image.
Responses:
Success Response:
Status Code: 200 OK
Body: (Binary data of the image file)
Error Responses:
Status Code: 400 Bad Request
Body:
json
Copy code
{
"success": false,
"status": 400,
"message": "Invalid image ID"
}
Status Code: 404 Not Found
Body:
json
Copy code
{
"success": false,
"status": 404,
"message": "Image not found"
}
Status Code: 500 Internal Server Error
Body:
json
Copy code
{
"success": false,
"status": 500,
"message": "Internal Server Error"
}
Feel free to customize the documentation based on your specific requirements and use case.
