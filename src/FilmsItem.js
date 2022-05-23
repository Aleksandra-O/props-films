import React from "react";
import Stars from "./Stars";

function FilmsItem (props) {

  const movies = props.movies;

  let count = () => (Math.floor(1 + Math.random() * 5));
  
  return (
    <div className="movie_card">
      {movies.map((movie, index) => <li key={index}>
                                      {movie}<br/>
                                      {<Stars count={count()} />}
                                    </li>)}
    </div>
  )
}

export default FilmsItem;
