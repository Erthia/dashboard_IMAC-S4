console.log("twiter is starting!!!");
var Twit= require('twit'); //Import twit
var config = require('./config');
var T = new Twit(config);
