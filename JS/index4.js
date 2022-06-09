//array te [] and object e {}
//object
const book1 = {
    name: 'DSA',
    price: 200,
    review: 4.5,
    writer: 'Md Mahmud'
}
const book2 = {
    name: 'Algorithm',
    price: 250,
    review: 4.7,
    writer: 'Rabbi Hasan'
}
const book3 = {
    name: 'Algorithm',
    price: 500,
    review: 4.3,
    writer: 'Harry Joseph'
}

const bookCrat = []; //object in array
// console.log(book1);
// const bookCrat = [book1, book2,book3];
// bookCrat.push(book3); //stack Datastructure

// console.log(bookCrat);
//object er property access
// console.log(book2.price);
// console.log(bookCrat[0]);
// console.log(bookCrat.length - 1); // 1
// console.log(book2['review']);
// console.log(book2.review);
//string akare dewa ache
//object er property gula by default string akare thake tai string dewa hoyna
//amra array theke loop kore value access and object theke value access kora shikhechi
//total taka ber korte hbe with 50 taka shipping charge

// console.log(book2.price + book1.price + 50);
// console.log(bookCrat[0].price + bookCrat[1].price + 50);

//total price ber korte hbe including 50 taka shipping charge

//prottek ta object e dhukbe price e dhukbe , onno arekta obj e dhukbe price ta nibe jog hbe , erpr shipping charge shoho total value ta dibe

// let totalPrice = 0;
// const shipping = 50;
// for (let i = 0; i < bookCrat.length; i++) {
//     console.log(bookCrat[i]);
// } 
//obj 2 ta access korlam

// let totalPrice = 0;
// const shipping = 50;
// for (let i = 0; i < bookCrat.length; i++) {
//     console.log(bookCrat[i].price);
// }
//price access korlam

let totalPrice = 0;
const shipping = 50;
for (let i = 0; i < bookCrat.length; i++) {
    totalPrice += bookCrat[i].price;
}
if (bookCrat.length == 0) {
    console.log('Payable total 0 taka');
} else {
    console.log(`payable total ${totalPrice + shipping} Taka`);
}
//visually update kora pore shikhbo






