//simple function 

function tongErMama1() {
    return "This is your tea";
}

const tea = tongErMama1();
console.log(tea);

/////
function tongErMama2() {
    return "This is your tea";
}

const tea2 = tongErMama2('Tetul tea');//func call korar shomoe value pass korle shetake boli Argument
console.log(tea2);

/////
function tongErMama3(chaType) { //function create korar shomoe amra pm set korte pari, etai parameter
    return `This is your ${chaType}`;
}

const tea3 = tongErMama3('Tetul tea');//func call korar shomoe value pass korle shetake boli Argument
console.log(tea3);

/////undefined ashbe karon kono pm deinai
function tongErMama4(chaType) {
    return `This is your ${chaType}`;
}

const tea4 = tongErMama4();
console.log(tea4);