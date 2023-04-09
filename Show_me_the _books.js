//Suppose you want to read books that were published 
//in the year above 2000. Write an arrow function 
//that will take an array of books as a function 
//parameter. Each book(object) will have the properties 
//title, author and year. You will have to filter out the books
// that have the year greater than 2000 and return
// the books in an array as shown below

// sample input:
// [
//    { 
//       title: 'To Kill a Mockingbird', 
//       author: 'Harper Lee', 
//       year: 1960 
//    },
                                
//   { 
//       title: 'Harry Potter and the Philosopher Stone', 
//       author: 'J.K. Rowling',
//       year: 1997 
//   },
                                                    
//   { 
//       title: 'The Hunger Games', 
//       author: 'Suzanne Collins', 
//       year: 2008
// ﻿  }
// ]
// sample output:
// [
//   { 
//     title: 'The Hunger Games', 
//     author: 'Suzanne Collins', 
//     year: 2008 
//   }
// ]

const inputBooks = [
   { 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee', 
      year: 1960 
   },
                                
  { 
      title: 'Harry Potter and the Philosopher Stone', 
      author: 'J.K. Rowling',
      year: 1997 
  },
                                                    
  { 
      title: 'The Hunger Games', 
      author: 'Suzanne Collins', 
      year: 2008
﻿  }
]

const findBooks = (arrOfBooks) => {
  //write your code here
 //don't forget to return
  const Book = arrOfBooks.filter(function(value,index,array){
    return array[index].year > 2000;
  })
  return Book;
}
console.log(findBooks(inputBooks));