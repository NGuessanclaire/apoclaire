
var connection= require('./connect');

var twig = require('twig');
var express = require('express');
var mysql = require('mysql');


var app = express()
app.use(express.static('views'))
var bodyParser = require('body-parser');


//motreur de template
app.set('view engine', 'twig')



//middleware
app.use(express.static('views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',function(req,res){
    res.render('index2.twig')
    })
    
app.get('/jus',function(req,res){
        res.render('jus.twig')
        })



app.get('/index', function (req, res) {
    res.render('index.twig')
})

app.post('/index',(req,res) => {

    var email = req.body.email
    
    var nom = req.body.nom
    var prenoms = req.body.prenom
    var avis = req.body.avis
    console.log(nom)
    
     
    if( (email == undefined || email == '') && ( nom == undefined ||nom== '') && ( avis == undefined|| avis == '' ) && (prenoms == undefined || prenoms == '') ){
        console.log("j' ai une erreur")

    }else {

    connection.query('INSERT INTO client SET nom = ?, prenoms = ?, 	email = ?, avis = ?',[nom, prenoms,email,avis,] ,(err,result) => {
        if (err) throw err

        console.log(result)
        })
    res.render('index')
    }	

console.log('reussi')
} )

app.get('/avis',(req,res) =>{

    connection.query("SELECT prenoms, avis FROM client ORDER BY id DESC Limit 10", function (err, result, fields) {
        if (err) throw err;
       res.render('avis',{result})
      });
     

})


     app.listen(3000)