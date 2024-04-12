const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 

//  const newNums = myNumbers.map((number)  => number +10);

const newNums = myNumbers
.map((number)  => number *10)
.map((number ) => number -5 )
.filter( (number) => number >40)

console.log(newNums);


