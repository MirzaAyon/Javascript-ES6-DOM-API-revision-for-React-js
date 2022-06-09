//Arrow function dekhbo

// function tongErMama(chaType = "Dudh Cha") {
//     return `This is your ${chaType}`;
// } //normal function


// const tongErMama = () => {
//     console.log('This is your tea')
// }
// tongErMama(); //evabe function call korake function invoke kora bujhae and braket gulake paranthesis bole
function tongErMama1() {
    return "This is your tea";
}

const tea = tongErMama1();
console.log(tea);



const tongErMama2 = (cha) => {
    // return 'this is your tea';
    return `this is your ${cha}`
}
const tea2 = tongErMama2("milk");
console.log(tea2);