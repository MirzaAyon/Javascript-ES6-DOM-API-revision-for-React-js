//Rokomari bookcart ta functional way te krbo
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









//with function
function bookCrat(cartItems) {
    let totalPrice = 0;
    const shipping = 50;
    if (cartItems.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < cartItems.length; i++) {
            totalPrice += cartItems[i].price;
        }
        return totalPrice + shipping;
    }


}
// const cart = [book1, book2, book3];
const cart = [];
const totalPrice = bookCrat(cart);
console.log(`payable amount ${totalPrice} taka`);

//home task : Sapno te shopping korte gelen and bkash er ekta promo offer running.Apni jodi minimum 500 takar shopping koren, apni 5% cashback paben.But ei cashback amount kkhonoi 120 takar beshi hbe na .So apni jodi ekhn shawpno theke 1275 taka er shopping koren, apni koto takar cashback paben
//amk ekta func create korte hbe ja amr cashback amount ke calculate krbe 



