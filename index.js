'use strict';

const express = require('express');
const app = express();
const path = require('path');
const list_of_students = require('./src/data');
const Groups = require('./src/Groups');
const decodedMorse = require('./src/decoder');

//tells the app to locate the home page of the application
const pathToLandingPage = path.join(__dirname, './public');

//automatically makes the app when it loads to go directly to the homepage which is deifned inside the public folder
app.use(express.static(pathToLandingPage));

//when ever a user visits /question1 return or execute the below code.
app.get('/question1', (req,res) => {
  let groups = new Groups(list_of_students);
  return res.send({ 
    response : groups 
  }).status(200);
});

app.get('/question2', (req, res) => {
  let morse_result = decodedMorse("-- .- -..-   -. --- .--");
  // console.log(morse_result);
  return res.send({
    response : morse_result
  }).status(200);
});

const PORT = 5000;

app.listen(PORT);
console.log('application is running on port ' + PORT + ': ');