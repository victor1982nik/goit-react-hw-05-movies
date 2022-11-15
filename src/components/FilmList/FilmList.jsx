import { fetchTrendingMovies } from "components/Api/fetchData";

export async function FilmList() {
    const resp = await fetchTrendingMovies();
    console.log(resp.data);
}