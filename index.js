console.log("test does this work");
let apiKey = "d38875b18a97affc63916b8f934ebbac";
let url = "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";
let city = $('#input');
let weather = JSON.stringify(".response")
const request = require('request');
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
console.log(message);