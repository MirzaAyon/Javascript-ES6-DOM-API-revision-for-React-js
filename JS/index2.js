var dudhPrice = 40;
var deemPrice = 9;

if (dudhPrice < 40) {
    console.log('dudh kinbo');
} else if (deemPrice < 10) {
    console.log('deem kinbo');
} else {
    console.log('Kinbo na');
}//etake bole conditional hierarchi mane conditional ta thik thak vabe chola
//conditional shajano ta important ta nohole 2nd condition ei jabe na like deem er condition ta age thekle okhanei dhuke jeto

//multiple value ke rakhar jonno array use korbo
//array ekta datastructure eta kono type na , datastructure amra use kori karon amra jeno thik thak vabe data gulake manage korte pari

const shoppingCart = ['pepsi', 'mojo', 'mango', 'taal'];
console.log(shoppingCart);
console.log(shoppingCart.length);
console.log(shoppingCart.indexOf('taal'));
console.log(shoppingCart[2]);
console.log(shoppingCart[-1]);
console.log(shoppingCart[10]);
console.log(shoppingCart[3]);
console.log(shoppingCart.indexOf('ball'));
console.log(shoppingCart[shoppingCart.length - 1]);
//last element ke access interview question

//iterative task or multiple task er jonno loop
//loop
//for loop
let studentCount = 36;
// i hochee index ke represent kore
for (let i = 0; i <= studentCount; i++) {
    console.log(i);
}

for (let i = 0; i <= studentCount; i++) {
    console.log('Hello Student', i + 1); //concatanation korlam
}


for (let i = 1; i <= studentCount; i++) {
    console.log('Hello Student', i);
} //concatanation korlam

for (let i = 1; i <= studentCount; i++) {
    console.log('Hello Student' + i);
}
//concatanation korlam

for (let i = 1; i <= studentCount; i++) {
    console.log('Hello Student' + i); //
}

// for (let i = 0; i <= studentCount; i--) {
//     console.log(i);
// }
// console.log("value of i", i);