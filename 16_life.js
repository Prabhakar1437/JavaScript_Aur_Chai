
// Immediately Invoked Function Expressions(IIFE)

//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();
// Global scope ke polution se problem hoti h kayibar usko  hatane ke liye 
//Function Imediately executed 


( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);

})('Vats')