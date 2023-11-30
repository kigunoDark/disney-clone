import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = process.env.MOVIES_API_KEY;

const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);
const getMovieByGenres = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default {
  getTrendingVideos,
  getMovieByGenres,
};
