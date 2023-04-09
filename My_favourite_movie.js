// Suppose you want to find your favourite movie. Write an arrow function where it will take three parameters:

// 1) name of the movie, movieTitle, a string

// 2) year of the movie, movieYear, a number

// 3) array of movies, arrOfMovies, array of objects



// The array of movies will have the properties title, director and year. From the arrayOfMovies, you will have to find the movie (object) that matches with the movieTitle and movieYear and return it as shown below:
const moviveTitle = 'Star Wars';
const movieYear = 1977;
const arrayOfMovie = [
    { 
      title: 'Star Wars', 
      director: 'George Lucas', 
      year: 1977 
    },
                 
    { 
      title: 'The  Dark Knight', 
      director: 'Christopher Nolan', 
      year: 2008 
    }
  ];
const findTheMovie = (movieTitle, movieYear, arrOfMovies) =>{
    //write your code here
    //don't forget to write return
    const movie = arrOfMovies.find(function(value,index,array){
       return array[index].title == movieTitle && array[index].year == movieYear;
    })
    return movie;
    }
    console.log(findTheMovie(moviveTitle,movieYear,arrayOfMovie));