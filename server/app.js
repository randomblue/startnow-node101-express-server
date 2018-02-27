var express = require('express');
var app = express();
const topSpot = require('./data.json')

app.get('/', function(req, res){
  res.send('Hello Worlf Yo ');
});

app.get('/data', function(req, res){
    // fs.readFile('data.json','utf8', data)=> {
    //     if (err) throw err;
    //     console.log(data);
    // fs.readFile('file', 'utf8', function (err, data) {
    //     if (err) throw err;
    //   });
    res.send(topSpot)
    })
    

module.exports = app


///////////////// fs.readFile
