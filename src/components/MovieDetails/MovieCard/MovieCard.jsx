import { BackLink } from 'components/BackLink/BackLink';
import { Box } from 'components/Box/Box';
//import { useLocation } from 'react-router-dom';
const BASE_PICTURE_PATH = 'https://image.tmdb.org/t/p/w500';
const DUMMY_IMAGE =
  'https://dummyimage.com/250x325/ddd/000000&text=no+image+available';

export const MovieCard = ({ movie, location }) => {
  //const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  //console.log('location', location);

  const {
    poster_path,
    backdrop_path,
    original_title,
    vote_average,
    overview,
    genres,
  } = movie;
  const picture =
    poster_path || backdrop_path
      ? BASE_PICTURE_PATH + (poster_path || backdrop_path)
      : DUMMY_IMAGE;

  return (
    <>
      <BackLink to={backLinkHref}>Back to Movies</BackLink>
      <Box display="flex" borderBottom="normal" pb={3}>
        <img src={picture} alt="" width="250" height="325" />
        <Box pl={4}>
          <h2>{original_title}</h2>
          <p>User score: {vote_average.toFixed(1) * 10}%</p>
          <Box fontWeight="bold">Overview</Box>
          <p>{overview}</p>
          <Box fontWeight="bold">Genres</Box>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </Box>
      </Box>
    </>
  );
};
