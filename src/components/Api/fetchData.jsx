import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '368aa8eefea213f2e59844c75600bcb3',
};

export const fetchTrendingMovies = () => {
  return axios.get(`/trending/all/day`);
};

export const fetchMovieById = id => {
  return axios.get(`/movie/${id}`);
};

export const fetchMovieCastById = id => {
  return axios.get(`/movie/${id}/credits`);
};

export const fetchMovieReviewsById = id => {
  return axios.get(`/movie/${id}/reviews?`);
};

export const fetchQuery = query => {
  return axios.get(`/search/movie?query=${query}`);
};
