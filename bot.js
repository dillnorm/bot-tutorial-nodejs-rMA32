var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
 
  
  
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  /*var text = request.JSON.Stringify(request);
  
  
  if(text.includes("@Gus")) {
                      
     if((text.includes("PT")||request.includes("pt"))||((request.includes("pT")||request.includes("Pt"))){
      this.res.writeHead(200);
        console.log("Posting PT Plan");
        postMessage("PT Plan:\n\
                     Formation 0620");
      this.res.end();  
     }
     else if(text.includes("Hey"){
      this.res.writeHead(200);
        postMessage("Wassup");
      this.res.end();  
     }
    else{
      this.res.writeHead(200);
      postMessage("What?");
      this.res.end();
    }
    
  //  var i = 1;                     //  set your counter to 1

  //  function myLoop () {           //  create a loop function
  //   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
  //      console.log("Hey Alexa");
  //      postMessage(cool());
  //      i++;                     //  increment the counter
 //       if (i < 4) {            //  if the counter < 10, call the loop function
//         myLoop();             //  ..  again which will trigger another 
 //       }                        //  ..  setTimeout()
//      }, 3000)
//    }
//    myLoop();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}
*/
function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
