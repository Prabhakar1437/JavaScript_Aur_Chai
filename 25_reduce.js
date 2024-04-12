const myNums = [1, 2, 3, 4, 5]

//  const myTotal = myNums.reduce(function (acc, currval){
//     console.log(acc, currval);
//     return acc + currval;
// },0) 


// const myTotal = myNums.reduce((acc, currval) => {  return acc+ currval; 
//   }, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        name: "shirt",
        price: 100, 
        quantity: 2
    },
    {
        name:"jeans",
        price:80,
        quantity: 5
      },{
        name:"shoes",
        price:1000,
        quantity: 10
    },{
        name:"jacket",
        price:700,
        quantity: 1
    },{
        name:"t-shirt",
        price:20,
        quantity: 6
      }
];

 const priceTopay =shoppingCart.reduce((acc,item ) => acc + item.price  , 0)
 console.log(priceTopay);
   