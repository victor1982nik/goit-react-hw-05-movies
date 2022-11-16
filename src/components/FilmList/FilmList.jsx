import { fetchTrendingMovies } from 'components/Api/fetchData';

export const FilmList = async () => {
  const resp = await fetchTrendingMovies();
  console.log(resp.data);
};
