var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
var path = require("path");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host: "localhost",
    database: "fullstackapp_db",
    user: "root",
    password: "Makerasll91!",
    port: 3306
});
connection.connect(function (err){
    if (err) {
        throw err;
    }
    start();
});

function start() {
app.get("/", (req,res) => {
    //must send something best to browser
    //path.join grabs the full cannonical path of the location ofs the file, then _dirnam grabs the directory name. 
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/all", (req,res) => {
    //must send something best to browser
    //path.join grabs the full cannonical path of the location ofs the file, then _dirnam grabs the directory name. 
    // res.sendFile(path.join(__dirname, "index.html"));
    res.send("Message from server");
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

}