const friends = ['neer', 'munna', 'shammi', 'plabon'];
friends.splice(1,1); //ekta super method
// friends.splice(index,deletecount,optional keo ke add korar jnno); 

friends.forEach(function (x) {
    console.log(`Hello ${x}`);
});
//munna ke baad dite chaile amra slice kore concat korte pari 
//othoba splice o korte pari