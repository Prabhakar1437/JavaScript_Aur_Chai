// TODO:if
// if(true){
 //executed
// }

// if(false){
    //Not executed
// }
//  const   isUserloggedIn = true
//  if (isUserLoggedIn) {
//      console.log("user is logged in")       
//  } 

 //TODO:<,>,<=,>=,==,!= ,=== ,!== are used for comparison operators 

 //TODO: if-else

// const temperature = 41
// if(temperature ===41){
//     console.log("It is cold outside");
// }else {
//     console.log("temperature is greater than 50");
// }


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
//  } 


//TODO: Loops


//if(balance>500) console.log("test"), console.log("test2");

// const balance = 1000
// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance  <750  ) {
// console.log("between 500 and  750");
// }else if(balance <900   ) {
//      console.log("between 750 and  900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn &&debitCard){ 
    console.log("Allow to buy course");
  }

  if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
  }