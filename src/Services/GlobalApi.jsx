import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/"
const api_key = process.env.MOVIES_API_KEY

//const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getTrendingMovie = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

export default {
    getTrendingMovie
}