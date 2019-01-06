import React from 'react';

// implicit return
const Movie = (props) => {
  return (
      <div key={props.id}>
        <p><strong>Title:</strong>{props.title}</p>
        <p><strong>Description:</strong>{props.description}</p>
        <p><strong>Release Year:</strong>{props.releaseYear}</p>
        <p><strong>Director:</strong>{props.director}</p>
        <p><strong>Genre:</strong>{props.genre}</p>
        <hr/>
      </div>
  )
}

export default Movie;