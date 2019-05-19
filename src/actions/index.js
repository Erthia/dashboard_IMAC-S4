console.log("twiter is starting!!!");
//import
var Twit= require('twit');
var config = require('./config');

var T = new Twit(config);
var param= {
  q: '🐱',//mot chercher
  count: 7};//nb de stwet chercher

T.get('search/tweets', param, calbak);

function calbak(err,data, response){
  console.log(data);
}
