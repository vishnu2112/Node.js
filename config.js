var mysql = require('mysql');
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password:'vishnu99',
database:'userlogin',
});
connection.connect(function(err){
if(err) {
    console.log("error in database");
   }
else {
 console.log("Database in connected");
  }
  
});
module.exports = connection;
