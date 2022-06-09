//home task : Sapno te shopping korte gelen and bkash er ekta promo offer running.Apni jodi minimum 500 takar shopping koren, apni 5% cashback paben.But ei cashback amount kkhonoi 120 takar beshi hbe na .So apni jodi ekhn shawpno theke 1275 taka er shopping koren, apni koto takar cashback paben
//amk ekta func create korte hbe ja amr cashback amount ke calculate krbe 


// //string concatenate

// var string1 = 'learning code is ';
// var string2= 'worthwhile';
// string1+=string2;
// console.log(string1);
// // command node __.js


// //nested array

// var nestedArray= [["one",42],["two"]];

// //multi dimensional array\

// var myArray = [[2,3,4],[1,2]];

// var myData = myArray[1][1];
// console.log(myData); 


// let telerdam=200;

// if(telerdam<200)
// {
//     console.log('tel kino');
// }
// else{
//     console.log('tel kino na');
// }

// console.log(telerdam>200);

// // ternary operator


// const output = telerdam < 200 ? "Tel kino" : "Tel kino na";

// console.log(output); 

//object

const book1 = {
    title: "book 1",
    price: 380,
}

const book2 = {
    title: "book 2",
    price: 340,
}

const book3 = {
    title: "book 3",
    price: 360,
}



// console.log(book1.price);
// console.log(book1['title']);



// shoppingCart.push(book3);



function getPrice(cartItem) {

    let totalPrice = 0;
    const shipping = 50;

    if (cartItem.length == 0) {
        return 0;
    }
    else {
        for (let i = 0; i < cartItem.length; i++) {
            totalPrice += cartItem[i].price;
        }

        return totalPrice + shipping;
    }
}





function cashback(price) {
    let cashback = 0;
    let finalCashback = 0;
    cashback = price * 0.05;

    if (cashback <= 120) {
        finalCashback = cashback;
    }
    else {
        finalCashback = 120;
    }
    return finalCashback;
}


const shoppingCart = [book1, book2];

const totalPrice = getPrice(shoppingCart);

const cashbackAmount = cashback(totalPrice);

console.log(` total charge: ${totalPrice} taka cashback${Math.ceil(cashbackAmount)}`);
