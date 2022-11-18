import axios from 'axios';

const API_KEY = '368aa8eefea213f2e59844c75600bcb3';
const URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = () => {
  return axios.get(`${URL}/trending/all/day?api_key=${API_KEY}`);
};

export const fetchMovieById = id => {
  return axios.get(`${URL}/movie/${id}?api_key=${API_KEY}`);
};

export const fetchMovieCastById = id => {
  return axios.get(`${URL}/movie/${id}/credits?api_key=${API_KEY}`);
};

export const fetchMovieReviewsById = id => {
  return axios.get(`${URL}/movie/${id}/reviews?api_key=${API_KEY}&page=1`);
};

/*
//const API_KEY = 'https://api.themoviedb.org/3/movie/550?api_key=368aa8eefea213f2e59844c75600bcb3'

https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
*/
