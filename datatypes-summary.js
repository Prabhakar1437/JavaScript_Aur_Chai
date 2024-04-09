//Primitive
//& types: String,Number,Boolean,null,undefined,symbol,bigint


//Reference (Non primitive)
//Array,Objects,Functions


// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);


const heros = ["shaktiman","naagraj","doga"]

let myObj ={
    name:"Vats",
    age:22,

}

const myFunction = function(){
    console.log("Hello world");

}

//********************************************************

// Stack(Primitive)  : You will get copy of variable that you declared 

// Heap(Non-Primitive):you will get refrence

let myYoutubename = "vatsprabhakar"

let anothername = myYoutubename

anothername = "Chaiaurcode"


console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"


}

let userTwo = userOne

userTwo.email="hitesh@googel.com"

console.log(userTwo.email);
console.log(userOne.email);