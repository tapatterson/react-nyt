const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('./public'));

app.use(express.static(“client/build”));

const PORT = process.env.PORT || 3000; 


if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/nytimes');
};

const db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

const Article = require('./models/Article.js');

// routes

app.post('/api/saved', function(req, res) {

  const newArticle = new Article(req.body);
 
  const title = req.body.title;
  const date =req.body.date;
  const url = req.body.url;

  newArticle.save(function(err, doc){
    if(err){
      console.log(err);
    } else { res.send(doc._id); }
  });
};


app.get('/api/saved', function(req, res) {
 
  Article.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.json(doc);
    }
  });
});

app.delete('/api/saved/', function(req, res){
    const url = req.param('url');

    Article.find({"url": url}).remove().exec(function(err, data){
        if(err){
          console.log(err);
        } else { res.send("deleted");}
    });
});


app.get('/', function(req, res) {
  res.sendFile('./public/indexDesign.html');
});


app.listen(PORT, function() {
  console.log('App running on',PORT);
});