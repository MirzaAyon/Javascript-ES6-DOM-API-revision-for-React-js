const friends = ['neer', 'munna', 'shammi', 'plabon'];
friends.splice(2, 0, 'Zahid');
//2 no index e keo ke delete korte chaina sudhu shammi ke pore thele diye zahid ke boshae dei
// friends.splice(2, 2, 'Zahid');

friends.forEach(function (x) {
    console.log(`Hello ${x}`);
});
//splice