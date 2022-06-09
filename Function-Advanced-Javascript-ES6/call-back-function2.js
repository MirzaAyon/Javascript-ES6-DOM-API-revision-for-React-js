
//string er poriborte function pass korbo
//ei func er vitore arekta func pass krbo
//ei func er vitore oi func ke call korbo
function printThreeTimes(input) {
    for (let i = 0; i < 3; i++) {
        console.log(input);
    }
}
function sayGoodNight() {
    return "GoodNight,Guys"
}
// const wish = printThreeTimes(sayGoodNight()); //evabe korle function ta call hoye jabe ekhane tai eta kora jabena 
//function er vitore paranthesis add korle function ta invoke hoye jae, amra function take ekhane invoke korbo na 
// printThreeTimes(sayGoodNight()); // ami just evabe func take pass krbo
const wish = printThreeTimes(sayGoodNight);

console.log(wish);