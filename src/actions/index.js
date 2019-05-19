console.log("twiter is starting!!!");
//import
var Twit= require('twit');
var config = require('./config');

var T = new Twit(config);
var param= {
  q: '🐱',//mot chercher
  count: 10};//nb de stwet chercher

T.get('search/tweets', param, calbak);

function calbak(err,data, response){
  console.log(data);
  console.log("Nombre de tweet qi corespondent à la recherche: "+data.statuses.length+"/"+param.count);
}
