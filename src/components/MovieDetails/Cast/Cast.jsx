import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { fetchMovieCastById } from 'components/fetchData';
const BASE_PICTURE_PATH = 'https://image.tmdb.org/t/p/w500';

export const Cast = () => {
  const [cast, setCast] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchMovieCastById(id).then(res => setCast(res.data.cast));
  }, [id]);

  // console.log(cast);
  //const {character, name, profile_path} = cast;

  return (
    <Box>
      {cast.length > 0 &&
        cast.map(({ id, character, name, profile_path }) => {
          return (
            <Box key={id}>
              <img src={BASE_PICTURE_PATH + profile_path} width="100" alt="" />
              <p>{name}</p>
              <p>Character: {character}</p>
            </Box>
          );
        })}
    </Box>
  );
};
