import axios from 'axios';
// import { URL, API_KEY } from '../config/const';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2d1f249c74b4f27f99b66603bba798dc';


export const fetchMovies = async () => {
    const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchTopRatedMovies = async () => {
    const response = await axios.get(`${URL}movie/top_rated?api_key=${API_KEY}`);
    return response.data.results;
};

// export const fetchMovieDetails = async (id) => {
//     const response = await axios.get(`${URL}movie/${id}?api_key=${API_KEY}`);
//     return response.data.results;
// };

// https://api.themoviedb.org/3/movie/${id}?api_key=2d1f249c74b4f27f99b66603bba798dc