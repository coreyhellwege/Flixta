const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())

// Connecting to the database:
mongoose.connect('mongodb://localhost:27017/flixta')

// Connecting to the model:
const Movie = require('./models/Movie')

// const movies = [
//     {
//       "id": 1,
//       "title": "Ferris Beuler's Day Off",
//       "description": "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.",
//       "releaseYear": "1986",
//       "director": "John Hughes",
//       "genre": "Comedy"
//     },
//     {
//       "id": 2,
//       "title": "Forrest Gump",
//       "description": "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
//       "releaseYear": "1994",
//       "director": "Robert Zemeckis",
//       "genre": "Comedy"
//     },
//     {
//       "id": 3,
//       "title": "Happy Gilmore",
//       "description": "A rejected hockey player puts his skills to the golf course to save his grandmother's house.",
//       "releaseYear": "1996",
//       "director": "Dennis Dugan",
//       "genre": "Comedy"
//     },
//     {
//       "id": 4,
//       "title": "There's Something About Mary",
//       "description": "A man gets a chance to meet up with his dream girl from high school, even though his date with her back then was a complete disaster.",
//       "releaseYear": "1998",
//       "director": "Bobby Farrelly",
//       "genre": "Comedy"
//     }
//   ]

app.listen(3001, function() {
    console.log('listening on 3001')
  })

app.get('/movies', (req, res) => {
  Movie.find({})
    .then(movies => {
      return res.send(movies)
    })
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params.id
  Movie.findOne({id})
  .then(movie => {
    return res.send(movie)
  })
})

app.post('/movies', (req, res) => {
  console.log(req.body)
  const { title, description, releaseYear, director, genre } = req.body;
  const movie = new Movie({ title, description, releaseYear, director, genre })
  movie.save()
    .then(movie => res.send(movie))
})

app.put('/movies/:id', (req, res) => {
  const { id } = req.params.id
  const { title, description, releaseYear, director, genre } = req.body;
  // Movie.findOne({id})
  //   .then(movie => {
  //     movie.name = name;
  //     movie.save()
  //       .then(newMovie => res.send(newMovie));
  //   })
  Movie.findOneAndUpdate(
    // query object:
    { id },
    // new object:
    { title, description, releaseYear, director, genre },
    // options:
    { new: true,
      runValidators: true
    }
  )
    .then(newMovie => res.send(newMovie))
})

app.delete('/movies/:id', (req, res) => {
  // console.log('deleting')
  // find the movie
  const { id } = req.params
  // const num = parseInt(id);
  // delete the movie
  // send the deleted movie back in response
  Movie.findOneAndDelete({ id })
    .then(deletedMovie => res.send(deletedMovie))
})
