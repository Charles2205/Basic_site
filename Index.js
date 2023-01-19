// Adding express framework to project
const express = require("express");
const bodyParser = require("body-parser");

// creating express application
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// define home route/location
app.get("/", (req, res) => {
  // reading an html file using the express sendFile

  res.sendFile(__dirname + "/index.html", (err) => {});
});
//route for welcome page
app.get('/welcome', (req, res) => {
  // reading an html file using the express sendFile
  res.sendFile(__dirname + '/welcome.html', (err) => {});
});

// define login route/location
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html", (err) => {});
});
app.post("/login", (req, res, next) => {
  let username = req.body.username;
  let userPassword = req.body.userPassword;
  if (username =='Joel' && userPassword == '123') {
    res.redirect('/welcome');
  }
  else
  {
    res.send('<h1>Wrong password</h1>');
  }
});

//    determinethe port number of express framework
const portNumber = process.env.PORT || 4040 ;

app.listen(portNumber, () => {
  console.log(` Server has started http://localhost:${portNumber}`);
});