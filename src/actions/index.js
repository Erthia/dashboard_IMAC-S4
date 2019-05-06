console.log("twiter is starting!!!");
//import
var Twit= require('twit');
var config = require('./config');

var T = new Twit(config);
var param= {
  q: 'banana',//mot chercher
  count: 2};//nb de stwet chercher

T.get('search/tweets', param, calbak);

function calbak(err,data, response){
  console.log(data);
}
