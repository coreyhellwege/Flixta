import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movies = [
//   {
//     id: 1,
//     title: "Ferris Beuler's Day Off",
//     description: "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.",
//     releaseYear: "1986",
//     director: "John Hughes",
//     genre: "Comedy"
//   },
//   {
//     id: 2,
//     title: "Forrest Gump",
//     description: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
//     releaseYear: "1994",
//     director: "Robert Zemeckis",
//     genre: "Comedy"
//   },
//   {
//     id: 3,
//     title: "Happy Gilmore",
//     description: "A rejected hockey player puts his skills to the golf course to save his grandmother's house.",
//     releaseYear: "1996",
//     director: "Dennis Dugan",
//     genre: "Comedy"
//   },
//   {
//     id: 4,
//     title: "There's Something About Mary",
//     description: "A man gets a chance to meet up with his dream girl from high school, even though his date with her back then was a complete disaster.",
//     releaseYear: "1998",
//     director: "Bobby Farrelly",
//     genre: "Comedy"
//   }
// ]

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to Flixta!</h1>
      <hr/>
      {movies.map(movie => {
        return (
          <Movie 
            key={movie.id}
            title={movie.title}
            description={movie.description}
            releaseYear={movie.releaseYear}
            director={movie.director}
            genre={movie.genre}
          />
        )}
      )}
      </div>
    )
  }
}

export default App;
