//default parameter
function tongErMama4(chaType = "Dudh Cha") {
    return `This is your ${chaType}`;
}

const tea4 = tongErMama4();
console.log(tea4);
///// when there is a pm
function tongErMama(chaType = "Dudh Cha") {
    return `This is your ${chaType}`;
}

const tea = tongErMama('Malta Cha');
console.log(tea); 
