var mysql = require('mysql')
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
 



var connection = mysql.createConnection({
    //propriété..
     host: 'localhost',
      user: 'root',
      password: '',
     database: 'fruit'
    
    });
    connection.connect(function(err){
    //callback
      if(err){
          console.log('error');
      }else{
          console.log('connecté');
      }

      
    })
    module.exports = connection
    