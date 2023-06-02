// It imports the check function from the 'express-validator' module.
// It exports two arrays of validation middleware functions: signupValidation and loginValidation.
// signupValidation contains validation checks for the 'name', 'email', and 'password' fields.
// loginValidation contains validation checks for the 'email' and 'password' fields.
// It imports necessary modules: createError, express, path, body-parser, cors, and the validation middleware from a 'validation.js' file.
// It creates an instance of the Express application.
// It configures the application to use JSON body parsing middleware.
// It configures the application to use URL-encoded body parsing middleware.
// It configures the application to use CORS middleware.
// It defines a route handler for the root path ("/") that sends a response with the message 'Node js file upload rest apis'.
// It defines a route handler for the "/register" path, which uses the signupValidation middleware to validate the request body, and then executes the corresponding registration code.
// It defines a route handler for the "/login" path, which uses the loginValidation middleware to validate the request body, and then executes the corresponding login code.
// It defines an error handling middleware that catches any errors passed to the next function, sets the appropriate status code and error message, and sends a JSON response with the error message.
// It starts the server on port 3000 and logs a message indicating that the server is running.


const { check } = require('express-validator');
exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })]


const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { signupValidation, loginValidation } = require('./validation.js');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Node js file upload rest apis');
 });
 app.post('/register', signupValidation, (req, res, next) => {
   // your registration code
 });
 app.post('/login', loginValidation, (req, res, next) => {
   // your login code
 });
 // Handling Errors
 app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
 });
 app.listen(3000,() => console.log('Server is running on port 3000'));