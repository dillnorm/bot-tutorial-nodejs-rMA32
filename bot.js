var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
 
  var Regexp = /@Gus/i;
  var Regexp2 = /PT/i;
  var Regexp3 = /Hey/i;
  var Regexp4 = /Abbreviations/i;
  var Regexp5 = /section group/i;
  
  var botRegex = /^\/cool guy/;
  
  if(request.text && Regexp.test(request.text)) {
     if(Regexp2.test(request.text)){
        console.log("Testing PT Plan");
        this.res.writeHead(200);
        console.log("Posting PT Plan");
        postMessage(ptDay());
        this.res.end();  
     }
     else if(Regexp3.test(request.text)){
      this.res.writeHead(200);
        postMessage("Wassup");
      this.res.end();  
     }
    else if(Regexp4.test(request.text)){
      var abv = "Abbreviations \n\nPD – Preparation Drill \n4C – Four for the Core\nHSD – Hip Stability Drill\nRD – Recovery Drill\nCD – Conditioning Drill\nCL – Climbing Drill \nPSD – PU/SU Drill \nSR – Shuttle Run \nAGR – Ability Group Run\nFM – Foot March \nRR – Release Run\nTR – Terrain Run\nSTC – Strength Training Circuit ";
      this.res.writeHead(200);
      postMessage(abv);
      this.res.end();  
    }
    else if(Regexp5.test(request.text)){
      var sec = "MS4 Ruck March Groups \n \n HHC Section 1: \n Knauss \n Pope \n Loftis \n Prescott, O. \n Camacho \n Kim\n Churchwell\n Daniels\n Killoran\n Forbes\n Clifford\n Davis, G.\n HHC Section 2: \n \n Norman\n King, K.\n Billman\n Jalek (Saunders-Rivers)\n Flanagan\n Leitner\n Ford\n Ray\n Word\n Adams, J.\n Bussell\n Wimberly\n Houser-Cross";
      this.res.writeHead(200);
      postMessage(sec);
      this.res.end();  
    }
    else{
      var w = "What?";
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
        rep = "FOR FRIDAY\n What:\n Preparation\n PD (5 reps) \n Activities\n ACFT STRENGTH TRAINING\n Deadlifts\n Arm Extension Push-ups\n Leg Tuck and Twist\n Standing Power Throw\n Farmers Carries\n 300m Shuttle Sprint\n \n Recovery\n RD (30 sec) \n \n Who: \n Primary Leader\n Ghee\n Secondary Leader\n Kim\n \n Where: \n RAC PAVILION\n w/ movement to ROTC BLDG\n When:  \n0615 Formation\n0630-0730 PT";    
    } /*   
    else if(d1.getDate() == 4){
        rep = "FOR MONDAY\n What:\n \n \n Preparation\n PD (10 reps)\n Activities\n SPRINT LADDER\n Consisting of 100m,\n 200m, 300m, 400m,\n and 800m timed sprints.  \n 100m = 25sec\n 200m = 45sec\n 400m = 90sec\n 800m = 4 min\n Recovery\n RD (30 sec) \n \n Who: \n Primary Leader\n Cook\n Secondary Leader\n Adams\n \n Where: \n RAC PAVILION\n w/ movement to track\n \n When:  \n 0615 Formation\n 0630-0730 PT";    }  
    else if(d1.getDate() == 5){
        rep = "FOR MONDAY\n What:\n \n \n Preparation\n PD (10 reps)\n Activities\n SPRINT LADDER\n Consisting of 100m,\n 200m, 300m, 400m,\n and 800m timed sprints.  \n 100m = 25sec\n 200m = 45sec\n 400m = 90sec\n 800m = 4 min\n Recovery\n RD (30 sec) \n \n Who: \n Primary Leader\n Cook\n Secondary Leader\n Adams\n \n Where: \n RAC PAVILION\n w/ movement to track\n \n When:  \n 0615 Formation\n 0630-0730 PT";    } 
    else if(d1.getDate() == 6){
        rep = "FOR MONDAY\n What:\n \n \n Preparation\n PD (10 reps)\n Activities\n SPRINT LADDER\n Consisting of 100m,\n 200m, 300m, 400m,\n and 800m timed sprints.  \n 100m = 25sec\n 200m = 45sec\n 400m = 90sec\n 800m = 4 min\n Recovery\n RD (30 sec) \n \n Who: \n Primary Leader\n Cook\n Secondary Leader\n Adams\n \n Where: \n RAC PAVILION\n w/ movement to track\n \n When:  \n 0615 Formation\n 0630-0730 PT";    } 
    else if(d1.getDate() == 7){
        rep = "FOR WEDNESDAY \n What:\n \n Ruck March\n 4MI\n APFU’s\n 35lbs.\n \n Who: \n HHC Section 2\n \n Where: \n RAC Pavilion\n \n When:  \n 0615 Formation\n 0630-0730 PT\n \n \n \n What: \n \n Ruck March\n 6MI\n APFU’s\n 35 lbs.\n \n Who: \n MSIII’s & HHC Section 1\n \n Where: \n Gentilly Trail\n \n When:  \n 0515 Formation\n 0530-0730 PT";    } 
    else if(d1.getDate() == 8){
        rep = "FOR WEDNESDAY \n What:\n \n Ruck March\n 4MI\n APFU’s\n 35lbs.\n \n Who: \n HHC Section 2\n \n Where: \n RAC Pavilion\n \n When:  \n 0615 Formation\n 0630-0730 PT\n \n \n \n What: \n \n Ruck March\n 6MI\n APFU’s\n 35 lbs.\n \n Who: \n MSIII’s & HHC Section 1\n \n Where: \n Gentilly Trail\n \n When:  \n 0515 Formation\n 0530-0730 PT";    } 
    else if(d1.getDate() == 9){
        rep = "FOR FRIDAY\n What:\n  \n  Preparation\n PD (10 reps) \n Activities\n ACFT CIRCUIT TRAINING\n \n Cadets will complete 5 rounds of ACFT Circuit Training. \n This consists of Deadlifts, Hand Release \n  Push-ups, \n 300M shuttle sprints, Kettlebell carries, \n Overhead Push Press, \n and Leg tuck and twists.\n \n Exercises will be timed at 1 min per exercise.\n Recovery\n RD (30 sec) \n \n Who: \n Primary Leader\n Wells\n Secondary Leader\n Camacho\n \n Where: \n RAC PAVILION\n w/ movement to ROTC BLDG\n \n When:  \n 0615 Formation\n 0630-0730 PT";    } 
    else if(d1.getDate() == 10){
        rep = "FOR FRIDAY\n What:\n \n Preparation\n PD (10 reps) \n Activities\n ACFT CIRCUIT TRAINING\n \n Cadets will complete 5 rounds of ACFT Circuit Training. \n This consists of Deadlifts, Hand Release \n Push-ups, \n 300M shuttle sprints, Kettlebell carries, \n Overhead Push Press, \n and Leg tuck and twists.\n \n Exercises will be timed at 1 min per exercise.\n Recovery\n RD (30 sec) \n \n Who: \n Primary Leader\n Wells\n Secondary Leader\n Camacho\n \n Where: \n RAC PAVILION\n w/ movement to ROTC BLDG\n \n When:  \n 0615 Formation\n 0630-0730 PT"; 
    } 
    else if(d1.getDate() == 11){
        rep = "FOR MONDAY\n What: \n \n Preparation \n PD (5 reps)\n Activities\n BODY WEIGHT CIRCUIT\n Cadets conduct circuits consisting of 25\n push-ups, 30 sit-ups, 10 Leg tucks, 20\n Lunges, and 20 air squats with 1 lap between circuits. Cadets will complete\n5 circuits.\n \n Recovery\n RD (30 sec) \n \n Who: \n Primary Leader\n Grizzard\n Secondary Leader\n King\n \n Where: \n RAC PAVILION\n \n When:\n 0615 Formation\n 0630-0730 PT    "; 
    } 
    else if(d1.getDate() == 12){
        rep = "FOR MONDAY\n What: \n \n Preparation \n PD (5 reps)\n Activities\n BODY WEIGHT CIRCUIT\n Cadets conduct circuits consisting of 25\n push-ups, 30 sit-ups, 10 Leg tucks, 20\n Lunges, and 20 air squats with 1 lap between circuits. Cadets will complete\n5 circuits.\n \n Recovery\n RD (30 sec) \n \n Who: \n Primary Leader\n Grizzard\n Secondary Leader\n King\n \n Where: \n RAC PAVILION\n \n When:\n 0615 Formation\n 0630-0730 PT    "; 
    } 
    else if(d1.getDate() == 13){
        rep = "FOR MONDAY\n What: \n \n Preparation \n PD (5 reps)\n Activities\n BODY WEIGHT CIRCUIT\n Cadets conduct circuits consisting of 25\n push-ups, 30 sit-ups, 10 Leg tucks, 20\n Lunges, and 20 air squats with 1 lap between circuits. Cadets will complete\n5 circuits.\n \n Recovery\n RD (30 sec) \n \n Who: \n Primary Leader\n Grizzard\n Secondary Leader\n King\n \n Where: \n RAC PAVILION\n \n When:\n 0615 Formation\n 0630-0730 PT        } 
    else if(d1.getDate() == 14){
        rep = "FOR WEDNESDAY\nWhat: \n\nRuck March\n6MI\nAPFU’s\n45 lbs.\n\nWho: \nHHC Section 1\n\nWhere: \nRAC Pavilion\n\nWhen:  \n0615 Formation\n0630-0730 PT\n\nWhat: \n\nRuck March\n6MI\nAPFU’s\n45 lbs.\n\nWho: \nMSIII’s & HHC Section 2\n\nWhere: \nGentilly Trail\n\nWhen:  \n0515 Formation\n0530-0730 PT"; } 
    else if(d1.getDate() == 15){
        rep = "FOR WEDNESDAY\nWhat: \n\nRuck March\n6MI\nAPFU’s\n45 lbs.\n\nWho: \nHHC Section 1\n\nWhere: \nRAC Pavilion\n\nWhen:  \n0615 Formation\n0630-0730 PT\n\nWhat: \n\nRuck March\n6MI\nAPFU’s\n45 lbs.\n\nWho: \nMSIII’s & HHC Section 2\n\nWhere: \nGentilly Trail\n\nWhen:  \n0515 Formation\n0530-0730 PT"; } 
    else if(d1.getDate() == 16){
        rep = "FOR FRIDAY\nWhat:\n\n\nPreparation\nPD (10 reps)\nActivities\nAGR \n3 Miles\nRecovery\nRD (30 sec)\n\n\nWho: \nPrimary Leader\nGeter\nSecondary Leader\nPope\n\n\nWhere: \nRAC PAVILION\n\nWhen:  \n0615 Formation\n0630-0730 PT"; 
    } 
    else if(d1.getDate() == 17){
        rep = "FOR FRIDAY\nWhat:\n\n\nPreparation\nPD (10 reps)\nActivities\nAGR \n3 Miles\nRecovery\nRD (30 sec)\n\n\nWho: \nPrimary Leader\nGeter\nSecondary Leader\nPope\n\n\nWhere: \nRAC PAVILION\n\nWhen:  \n0615 Formation\n0630-0730 PT"; 
    } 
    else if(d1.getDate() == 18){
        rep = "FOR MONDAY\nWhat:\n\nPreparation\nPD (10 reps)\nActivities\nBODY WEIGHT CIRCUIT\nCadets conduct circuits consisting of 25\npush-ups, 30 sit-ups, 10 Leg tucks, 20\nLunges, and 20 air squats with 1 lap between circuits. Cadets will complete\n5 circuits.\nRecovery\nRD (30 sec) \n\nWho: \nPrimary Leader\nChappell\nSecondary Leader\nFlanagan\n\nWhere: \nRAC PAVILION\nOr RAC Center\n\nWhen:  \n0615 Formation\n0630-0730 PT
"; 
    } 
    else if(d1.getDate() == 19){
        rep = "FOR MONDAY\nWhat:\n\nPreparation\nPD (10 reps)\nActivities\nBODY WEIGHT CIRCUIT\nCadets conduct circuits consisting of 25\npush-ups, 30 sit-ups, 10 Leg tucks, 20\nLunges, and 20 air squats with 1 lap between circuits. Cadets will complete\n5 circuits.\nRecovery\nRD (30 sec) \n\nWho: \nPrimary Leader\nChappell\nSecondary Leader\nFlanagan\n\nWhere: \nRAC PAVILION\nOr RAC Center\n\nWhen:  \n0615 Formation\n0630-0730 PT
"; 
    } 
    else if(d1.getDate() == 20){
        rep = "FOR MONDAY\n What:\n\nPreparation\nPD (10 reps)\nActivities\nBODY WEIGHT CIRCUIT\nCadets conduct circuits consisting of 25\npush-ups, 30 sit-ups, 10 Leg tucks, 20\nLunges, and 20 air squats with 1 lap between circuits. Cadets will complete\n5 circuits.\nRecovery\nRD (30 sec) \n\nWho: \nPrimary Leader\nChappell\nSecondary Leader\nFlanagan\n\nWhere: \nRAC PAVILION\nOr RAC Center\n\nWhen:  \n0615 Formation\n0630-0730 PT
"; 
    } 
    else if(d1.getDate() == 21){
        rep = "FOR WEDNESDAY\nWhat: \n\nRuck March\n6MI\nAPFU’s\n45 lbs.\n\nWho: \nHHC Section 2\n\nWhere: \nRAC Pavilion\n\nWhen:  \n0615 Formation\n0630-0730 PT\n\n\nWhat: \n\nRuck March\n6MI\nAPFU’s\n45 lbs.\n\nWho: \nMSIII’s & HHC Section 1\n\nWhere: \nGentilly Trail\n\nWhen:  \n0515 Formation\n0530-0730 PT
"; 
    } 
    else if(d1.getDate() == 22){
        rep = "FOR WEDNESDAY\nWhat: \n\nRuck March\n6MI\nAPFU’s\n45 lbs.\n\nWho: \nHHC Section 2\n\nWhere: \nRAC Pavilion\n\nWhen:  \n0615 Formation\n0630-0730 PT\n\n\nWhat: \n\nRuck March\n6MI\nAPFU’s\n45 lbs.\n\nWho: \nMSIII’s & HHC Section 1\n\nWhere: \nGentilly Trail\n\nWhen:  \n0515 Formation\n0530-0730 PT
"; 
    } 
    else if(d1.getDate() == 23){
        rep = "FOR FRIDAY\nWhat: \n\nPreparation\nPD (10 reps)\nActivities\n\n30/60s followed by\n60/120s, and\nfinishing with\n30/60s.\n\nRecovery\nRD (30 sec) \n\nWho: \nPrimary Leader\nEason\nSecondary Leader\nSanders Rivers\n\n\nWhere: \nRAC PAVILION\nw/ movement to Paulson Stadium Parking lot\nWhen:  \n0615 Formation\n0630-0730 PT
"; 
    } 
    else if(d1.getDate() == 24){
        rep = "FOR FRIDAY\nWhat: \n\nPreparation\nPD (10 reps)\nActivities\n\n30/60s followed by\n60/120s, and\nfinishing with\n30/60s.\n\nRecovery\nRD (30 sec) \n\nWho: \nPrimary Leader\nEason\nSecondary Leader\nSanders Rivers\n\n\nWhere: \nRAC PAVILION\nw/ movement to Paulson Stadium Parking lot\nWhen:  \n0615 Formation\n0630-0730 PT
"; 
    } 
    else if(d1.getDate() == 25){
        rep = "FOR MONDAY\nWhat: \n\nPreparation\nPD (5 reps)\nActivities\nCO Assessment\nMurph Squad competition\n\nRecovery\nRD (30 sec)\n\n\nWho: \nPrimary Leader\nLowder\nSecondary Leader\nForbes\n\nWhere: \nRAC PAVILION\nOr RAC Center\n\nWhen:  \n00545 Formation\n0600-0700 PT
"; 
    } 
    else if(d1.getDate() == 26){
        rep = "FOR MONDAY\nWhat: \n\nPreparation\nPD (5 reps)\nActivities\nCO Assessment\nMurph Squad competition\n\nRecovery\nRD (30 sec)\n\n\nWho: \nPrimary Leader\nLowder\nSecondary Leader\nForbes\n\nWhere: \nRAC PAVILION\nOr RAC Center\n\nWhen:  \n00545 Formation\n0600-0700 PT
"; 
    } 
    else if(d1.getDate() == 27){
        rep = "FOR MONDAY\nWhat: \n\nPreparation\nPD (5 reps)\nActivities\nCO Assessment\nMurph Squad competition\n\nRecovery\nRD (30 sec)\n\n\nWho: \nPrimary Leader\nLowder\nSecondary Leader\nForbes\n\nWhere: \nRAC PAVILION\nOr RAC Center\n\nWhen:  \n00545 Formation\n0600-0700 PT
"; 
    } 
    else if(d1.getDate() == 28){
        rep = "FOR WEDNESDAY\nWhat: \n\nRuck March\n6MI\nOCPs\n35 lbs.\n\nWho: \nHHC Section 1\n\nWhere: \nRAC Pavilion\n\nWhen:  \n0615 Formation\n0630-0730 PT\n\n\nWhat: \n\nRuck March\n8 Miles\nOCPs\n35 lbs.\n\nWho: \nMSIII’s & HHC Section 2\n\nWhere: \nGentilly Trail\n\nWhen:  \n0400\nFormation\n00410-0730 PT
"; 
    } 
    else if(d1.getDate() == 29){
        rep = "FOR WEDNESDAY\nWhat: \n\nRuck March\n6MI\nOCPs\n35 lbs.\n\nWho: \nHHC Section 1\n\nWhere: \nRAC Pavilion\n\nWhen:  \n0615 Formation\n0630-0730 PT\n\n\nWhat: \n\nRuck March\n8 Miles\nOCPs\n35 lbs.\n\nWho: \nMSIII’s & HHC Section 2\n\nWhere: \nGentilly Trail\n\nWhen:  \n0400\nFormation\n00410-0730 PT
"; 

    } */
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
