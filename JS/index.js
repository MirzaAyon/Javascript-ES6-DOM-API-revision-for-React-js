//variable
var oilPrice = 200; //number
console.log(oilPrice);

var oilPrice = "200"; //string
console.log(oilPrice);

console.log(typeof oilPrice);
var ricePrice = 70;
var sum = oilPrice + ricePrice;
console.log(sum);

//let
let frootoPrice = 20;
frootoPrice = 30; //possible
console.log(frootoPrice);

//const
const piValue = 3.1416;
// piValue = 4;
console.log(piValue);

let x = 25;

let y = 5;
x = x + y;
let z = x + y;
console.log(z);
// x += y;
// x -= y;
// x *= y;
// x /= y;
console.log(x);
console.log(z);

let deemPrice = 200;
if (deemPrice < 200) {
    console.log('Kinbo');
}
//if use korlei else use korte hbe emn kono rule nai
let ataPrice = 50;
if (ataPrice < 50) {
    console.log('kinbo')
} else {
    console.log('kinbo na ');
}
console.log(ataPrice < 50);
//comparison operator 
// <,>,<=,>=,==, != all are the comparison operator

//ternary operator, etareact e beshi use hoe
//niche example

const output = ataPrice < 50 ? 'Ata Kinbo' : "Kinbo na";
console.log(output);
//if else er bodole ebhabe tarnary operator use kore kaj ta easily kora jae
//egula ke sintactical sugar jar dara evabe easily shortcut e code manage kora jae