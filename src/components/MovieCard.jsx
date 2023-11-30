import React from "react";
import { IMAGE_BASE_URL } from "../Constants/App.constants";

function MovieCard({ path }) {
  return (
    <img
      src={IMAGE_BASE_URL + path}
      className="w-[110px] md:w-[200px] rounded-lg 
    hover:border-[3px] border-gray-400 cursor-pointer
    hover:scale-110 transition-all duration-150 ease-in"
    />
  );
}

export default MovieCard;
