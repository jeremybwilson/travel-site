// console.log(`Hello World!`);
var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + '/index.html', "<h1>HTML IS GREAT!</H1>", function(error){
  if(error){
    return console.log(error);
  } else {
    return console.log("Congrats.");
  }
});

var myPhotoLocation = 'https://raw.githubusercontent.com/jeremybwilson/jeremywilson.com/master/src/images/seattle_skyline.png';

https.get(myPhotoLocation, function(response){
  response.pipe(fs.createWriteStream(__dirname + "/my_skyline.png"));
});