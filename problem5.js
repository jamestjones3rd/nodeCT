// It imports the 'mysql' module, which is used to connect to and interact with MySQL databases.
// It creates a MySQL connection object by calling the createConnection method of the 'mysql' module. The connection object is assigned to the variable connection.
// Inside the createConnection method, you need to specify the connection details such as the host, username, password, and database name.
// It establishes a connection to the MySQL database by calling the connect method of the connection object.
// In the callback function provided to the connect method, it checks if an error occurred during the connection process. If an error exists, it logs the error to the console.
// If no error occurred, it logs 'Connected! :)' to the console, indicating that the connection was successful.
// Finally, it exports the connection object so that other parts of the application can use it to execute queries and interact with the MySQL database.



var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'your username',
  password:'your password',
  database:'your database name'
});
connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
}); 
module.exports = connection;
