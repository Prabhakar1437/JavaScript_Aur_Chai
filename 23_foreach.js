// const coding =["js", "css", "html","ruby","python","java","c++"];

//  const values =coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10];

//  const newNums = myNums.filter((num)=> 
//  {
//     return num>4})
//  console.log(newNums);

// const newNums =[]

// myNums.forEach((num)=> {    if (num>4) {
//     newNums.push(num)
// } });
// console.log(newNums);


const books = [
    {
        title: "The Catcher in the Rye",
        author:"J.D. Salinger",
        year: 1951,
        genre: "Fiction"
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        year: 1935,
        genre: "Political Science Fiction"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Novel"
    },{
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,     
        genre: "Fiction"
    },{
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Science Fiction - Political"
    },
    { 
        title: "Brave New World",
        author: "   transcripts Good .author  ",
        year: 1932,
        genre: "Science Fiction - Social"
    },{
        title: "The Brothers Karamazov",
        author: "Mikhail Bulgakov",
        year: 1928,     
        genre: "Fiction - Mystery"
    },{
        title: "War and Peace",
        author: "Leo Tolstoy",
        year: 1867,
        genre: "Historical Fiction"
    },{
        title: "A Clockwork Orange",
        author: "Philip K. Dick",
        year: 1962,
        genre: "Fantasy - Crime"

    },
]

const  userBooks = books.filter(book => book.genre === 'Historical Fiction') ;
console.log('userBooks', userBooks);
                                                                                                                                                                                                                                                                                                        

    

                        