function printThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        console.log(callback()); //ekhane paranthesis add korbo
        //karon call back ekta function tai eke invoke korte hbe 
        //() na dile just eta bolto je eta ekta function
    }
}
function sayGoodNight() {
    return "GoodNight,Guys"
    console.log('Bye bye'); //eta print hbe na karon function e return korar por code ta function theke exit hoye jachee erpr tai r kono code kaj korbe na 
    //already console log code ta blur hoye ache 
    //kintu return er age console dile kaj korto
}

// const wish = printThreeTimes(sayGoodNight);

// console.log(wish); //evabe korle ekta undefined show kore

printThreeTimes(sayGoodNight);
//callback function - eta call back function karon amra etake ekta func er argument hishebe pass korchi, invoking inside parent function

//login
  //showgallery
    //viewPhotoes
       //seePhotoes
       //This is the real life example of call back function,  ekhane dependancy ache mane ekta function e dhukle arekta function e jete parbo
       //user login na korle kkhono showGallery te user jete parbe na 
       //ekhane pura system e ekta call back situation create hoye gese 


