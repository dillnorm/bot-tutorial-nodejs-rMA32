var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
 
  var Regexp = /@Gus/i;
  var Regexp2 = /PT/i;
  var Regexp3 = /Hey/i;
  
  var botRegex = /^\/cool guy/;
  
  if(request.text && Regexp.test(request.text)) {
     if(Regexp2.test(request.text)){
        console.log("Testing PT Plan");
        this.res.writeHead(200);
        console.log("Posting PT Plan");
        postMessage(ptDay());
        this.res.end();  
     }
     else if(request.text && Regexp3.test(request.text)){
      this.res.writeHead(200);
        postMessage("Wassup");
      this.res.end();  
     }
    else{
      var w = "What?";
      w.bold();
      this.res.writeHead(200);
      postMessage(w);
      this.res.end();
    }
  }
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  /*var txt = JSON.stringify(request.text);
  var str = "@Gus";
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  if(str.search("@Gus") != -1) {
   console.log("care txt2");
  }
  console.log("Comparing"+ txt +" and " + str);
 
  if(txt == txt2) {
   console.log("care");
  }
  */
   /*                    
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

  }*/
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}
function ptDay(){
    var d1 = new Date();
    var rep = "";
    if(d1.getDate() == 3){
        rep = "What:\nPreparation\nPD (5 reps) \nActivities\nACFT STRENGTH TRAINING\nDeadlifts\nArm Extension Push-ups\nLeg Tuck and Twist\nStanding Power Throw\nFarmers Carries\n300m Shuttle Sprint\n\nRecovery\nRD (30 sec) \n\nWho: \nPrimary Leader\nGhee\nSecondary Leader\nKim\n\nWhere: \nRAC PAVILION\nw/ movement to ROTC BLDG\nWhen:  \n0615 Formation\n0630-0730 PT"; 
    }
    else if(d1.getDate() == 4){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    }  
    else if(d1.getDate() == 5){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 6){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 7){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 8){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 9){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 10){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 11){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 12){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 13){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 14){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 15){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 16){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 17){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 18){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 19){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 20){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 21){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 22){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 23){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 24){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 25){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 26){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 27){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 28){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 29){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
    else if(d1.getDate() == 30){
        rep = "PT Plan:\n Formation 0620 \n Stuff"; 
    } 
  
  
  else{
        rep = "Error Getting PT plan";
        }
  return rep;
};

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
