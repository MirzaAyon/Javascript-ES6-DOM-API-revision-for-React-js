//ekhn dekhbo map, for each r map 2 ta eki kaj e kore 2 tar kaj e holo loop through kora

const friends = ['neer', 'munna', 'shammi', 'plabon'];

friends.map(frnd => console.log(frnd));
//kono kichu return korte chaile map use hoy r return korar moto kichu na thakle forEach use hoe
//for each loop ta for loop er moto but map ta eto powerfull je eta ekta different array return kore
//map use korle arekta array pabo

const numbers = [2, 23, 45, 67, 5];
//amra chaitesi ei number gulake 2 diye multiply kore ekta different array return korte

// const mulByThree = numbers.forEach(num => num * 3); //undefined
const mulByThree = numbers.map(num => num * 3);//same jinish map diye korar por different array dibe   

console.log(mulByThree);
