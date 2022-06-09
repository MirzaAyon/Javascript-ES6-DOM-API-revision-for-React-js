const tongErmama = (chaType) => {
    console.log(`Your ${chaType} tea`);
}
tongErmama('Green');
//used arrow function
//annoymimous function shomporke DOM e janbo etao imp
//function --> First class citizen  
//eta bolar karon - js er func shudhu regular func er modhei use hoe na, amra chaile func ke as a argument hishebe arek ta func er modhe pass kore dite pari,func take value hishebe use korte pari, variable e set korte pari,func take normal func hishebe invoke korte pari

//annoynimous function er example

const tongErMama = function () {
    console.log(`Ei nen apnar ${chaType}`);
}
//eta dom e use hoy

//ekta function ke arekta function er argument hishebe pass kora jae eta ke bole call back function

//ekhon dekhbo callback function dekhbo 

function printThreeTimes(input) {
    for (let i = 0; i < 3; i++) {
        console.log(input);
    }
}
printThreeTimes('Hello everyone'); //3 bar hello print hbe karon input ta 3 bar call hbe 

