//filter method
//filter, map er moto new array return kore
const numbers = [2, 23, 38, 48, 29, 45, 67, 5];
//filter this numbers array and only print even numbers

const evenNums = numbers.filter(num => num % 2 == 0)

console.log(evenNums);
const oddNums = numbers.filter(num => num % 2 == 1)

console.log(oddNums);

//odd er jonno o korbo
//loop diye korte gele if/else er kaj chole ashto