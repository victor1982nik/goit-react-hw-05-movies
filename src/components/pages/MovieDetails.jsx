import { fetchMovieById } from 'components/Api/fetchData';
import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
const BASE_PICTURE_PATH = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  //const [genres, setGenres] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchMovieById(id).then(res => setMovie(res.data));    
  }, [id]);
   //useEffect(()=>{
    
    //  if(movie) {
    //   const genres = movie?.genres.map(genre => genre.name);
    //   console.log(genres);
    //  }
     
   //},[movie])

  //console.log(movie.data);
  // const pict = BASE_PICTURE_PATH + movie?.data?.poster_path;
  

  //const genres = movie?.genres.map(genre => genre.name)
  return (
    <main>
      <Box display='flex'>
        <img
          src={BASE_PICTURE_PATH + movie?.poster_path}
          alt=""
          width="250"
        />
        <div>
          <h2>{movie?.original_title}</h2>
          <p>User score: {movie?.vote_average}</p>
          <p>Overview</p>
          <p>{movie?.overview}</p>
          <p>Genres</p>
          <p>{movie?.genres?.name}</p>
        </div>
      </Box>
      <Box display='flex' flexDirection='column'>
        <p>Additional information</p>
        <NavLink to='cast'>Cast</NavLink>
        <NavLink to='reviews'>Reviews</NavLink>
      </Box>
      <Outlet />
      
    </main>
  );
};
