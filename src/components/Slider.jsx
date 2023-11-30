import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { IMAGE_BASE_URL } from "../Constants/App.constants";
const screeWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovie();
  }, []);

  const getTrendingMovie = () => {
    GlobalApi.getTrendingVideos
      .then((res) => {
        setMovieList(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const sliderRight = (element) => {
    element.scrollLeft += screeWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screeWidth - 110;
  };

  return (
    <div>
      <div>
        <HiChevronLeft
          onClick={() => sliderLeft(elementRef.current)}
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        />
        <HiChevronRight
          onClick={() => sliderRight(elementRef.current)}
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        />
      </div>
      <div
        ref={elementRef}
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
      >
        {movieList.map((movie, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
