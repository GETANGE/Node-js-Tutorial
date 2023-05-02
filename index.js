const express = require('express');
const app = express();
const port = 5000;
const mysql = require('mysql');
const bodyParser = require('body-parser');

// configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// create a database connection and connect to the MySQL server.
const connect = mysql.createConnection({
  host: 'localhost',
  user: 'Manu_dev@Database',
  password: 'ZAKI6971',
  database: 'Users'
});

// link the connection to the database.
connect.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err);
    return;
  }
  console.log('Connected to database with id ' + connect.threadId);
});

// handle POST requests to /register
app.post('/register', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const sql = "INSERT INTO Customers (FullName, EmailAddress, Password) VALUES ?";
  const values = [[name, email, password]];
  connect.query(sql, [values], function(err, result) {
    if (err) {
      console.error('Error loading to the database: ' + err);
      res.status(500).send('An error occurred while processing your request.');
      return;
    }
    console.log('Inserted ' + result.affectedRows + ' row(s) into the database.');
    res.send('Registration successful!');
  });
});

// create a server connection.
app.listen(port, (error) => {
  if (error) {
    console.error('Server cannot listen on port ' + port + ': ' + error);
  } else {
    console.log('Server listening on port ' + port);
  }
});
