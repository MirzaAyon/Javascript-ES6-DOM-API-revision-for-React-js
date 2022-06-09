const friends = ['neer', 'munna', 'shammi', 'plabon'];
const bestFriends = friends.slice(0, 3);
bestFriends.forEach(function (x) {
    console.log(`Hello ${x}`);
});
//use of filter