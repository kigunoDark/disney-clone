import React from "react";
import genres from "../Constants/GenreList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {genres.map(
        ({ name, id }, index) =>
          index <= 4 && (
            <div key={id} className="p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{name}</h2>
              <MovieList genreId={id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
