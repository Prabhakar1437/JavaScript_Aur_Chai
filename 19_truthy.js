const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");   
}  else{
    console.log("Did not get user email");
}         


//falsy value : false, 0,-0, BigInt 0n, "",null,undefined,NaN

//truly value : true, "0","false"," ",[],{},function(){},non-empty string", non zero number ,BigInt !=0n, object or array

// if(userEmail.length === 0){
//     console.log("Array is empty");

// }

const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//false == 0 -> true , false == "" ->true , 0 =="" -> true

//TODO: Nullish Coalescing Operator (?) : null undefined

let val1;
// val1 = 5 ??10
//val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ??10??15



// console.log(val1); 

//TODO: Ternary Operators

//condition ? true : false;

// const iceTeaPrice =100



// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");




