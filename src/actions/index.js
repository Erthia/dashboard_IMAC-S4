console.log("twiter is starting!!!");
//import
var Twit= require('twit');
var config = require('./config');

var T = new Twit(config);
var param= {
  q: 'banana since:2011-07-11',
  count: 100 };
  
T.get('search/tweets', param, calbak);

function calbak(err,data, response){
  console.log(data);
}

console.log("the end")
