//Objects declare in 2 way 1. literal 2. constructer
//singleton : when we create object from constructer then this object is singleton object

//Object literals

//Object.create  -> constructer method by this way we create singleton object.

const mySys = Symbol("key1")
const js_user ={

    name:"Vats",
    "full name":"Hitesh Choudhary",
    [mySys]:"mykey1",
    age:22,
    location:"begusarai",
    email:"vats@goggle.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(js_user.email);
// console.log(js_user["email"]);
// console.log(js_user["full name"]);
// console.log(js_user[mySys]);

js_user.age = 43

//Object.freeze(js_user)
js_user.email="vats@email.com"
//console.log(js_user);

js_user.greeting = function() {
    console.log(" Hello JS user");

}

js_user.greetingTwo = function() {
    console.log(`Hello JS user ,${this.name}`);
}
console.log(js_user.greeting());
console.log(js_user.greetingTwo());