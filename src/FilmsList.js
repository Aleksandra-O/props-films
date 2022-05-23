import React from "react";
import movies from "./mock/movies";
import FilmsItem from "./FilmsItem";

function FilmsList () {
  
  return (
    <div className="container">
      <ul className="movies_list">
        <FilmsItem movies={movies} />
      </ul>
    </div>
  )
}

export default FilmsList;
