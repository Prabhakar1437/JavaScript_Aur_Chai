//For of 

const myArray = [1,2,3,4,5,6,7,8,9,10]
for (const num  of myArray) {
    //console.log(num);
    
}

const greetings = "Hello"

for (const letter of greetings) {
    //console.log(letter);
    
}

//ToDO: MAPS store unique values

const myMap = new Map()
myMap.set("name","Vats")
myMap.set("age",25)
myMap.set("gender","Male")
myMap.set("hobbies",["Reading","Gaming"])

//console.log(myMap);

// for (const [key ,value] of myMap) {
//     console.log(key, ':-',value);
// }


// const myObject ={
//     name:"Vats",
//     age:25,
//     gender:"Male",
//     hobbies:["Reading","Gaming"]
// }

// for (const [key ,value] of myObject) {
//     console.log(key, ':-',value);
// }


const myObject = {
    js:'javascript',
    py:'python',
    rb:'ruby',
    php:'php',
    cpp:'c++',
    swift:'swift by apple'
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js","rb","scss","js","py","cpp"];
// for(const key in programming){
//     console.log(programming[key]);
// }


// const myMap1 = new Map()
// myMap.set("name","Vats")
// myMap.set("age",25)
// myMap.set("gender","Male")
// myMap.set("hobbies",["Reading","Gaming"])

// for (const key in myMap1) {
//     console.log(key);
// }

const coding = ["js","css","html","htm","json","sql"];

// coding.forEach(function (value) {
//     console.log(value);

// })

// coding.forEach((item)=>{
//     console.log(item);
// });
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);


// coding.forEach((item,index,arr)=>{   
//     console.log(item,index,arr);  
// });

const myCoding =[
    {
        name:"Vats",
        age:25,
        gender:"Male",
        hobbies:["Reading","Gaming"]
    },
    {       
        name:"John",
        age:25,
        gender:"Male",
        hobbies:["Reading","Gaming"]
    },
    {
        name:"Mary",
        age:25,
        gender:"Male",
        hobbies:["Reading","Gaming"]

    }
]

myCoding.forEach((item)=>{     
    console.log(item.name);
})

      