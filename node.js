
// set up express web app and which port to assign it to
var express = require('express');
var app = express();
app.set('port', process.argv[2]);

// set up handlebars engine for rendering html template files
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// sets up bodyParsing for xwww URL and JSON formatted POST submissions
var bodyParser = require('body-parser');  // initializes bodyParser handler
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up file path for file management and directory and path middleware for serving up static files
var path = require('path');
app.use(express.static('public'));

// routing scenarios
app.get('/',function(req,res){
    res.sendFile('index.html', {root: path.join(__dirname, './public')});
});

app.get('/travel',function(req,res){
    res.sendFile('travel.html', {root: path.join(__dirname, './public')});
});

app.get('/gaming',function(req,res){
    res.sendFile('gaming.html', {root: path.join(__dirname, './public')});
});

app.get('/jalen',function(req,res){
    res.sendFile('jalen.html', {root: path.join(__dirname, './public')});
});

app.get('/feedback',function(req,res){
    res.render('feedback', {
        title:'Feedback',
        style:'styles.css',
        javascript:'feedback_page.js'
    })
});

// app.get('/other-page',function(req,res){
//     res.type('text/plain');
//     res.send('Welcome to the other page!');
// });

// app.get('/random-number', function(req,res){
//     num = Math.floor(Math.random() * Math.floor(10000));
//     res.type('text/plain');
//     res.send("This is the random number page.  The random number is: " + num)
// });

// handles 404 status code issues
app.use(function(req,res){
    res.status(404);
    res.render('404');
  });
  
  // handles 500 status code issues
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
  }); 

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});