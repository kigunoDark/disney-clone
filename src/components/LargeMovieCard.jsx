import React from "react";
import { IMAGE_BASE_URL } from "../Constants/App.constants";

function LargeMovieCard({ path, title }) {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img
        src={IMAGE_BASE_URL + path}
        className="w-[110px] md:w-[260px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        "
        alt="genre poster"
      />
      <h2
        className="w-[110px] md:w-[260px] text-white
        mt-2"
      >
        {title}
      </h2>
    </section>
  );
}

export default LargeMovieCard;
