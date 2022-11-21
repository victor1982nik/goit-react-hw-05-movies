import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { fetchMovieCastById } from 'components/Api/fetchData';
import { Loader } from 'components/Loader/Loader';
import { CastCard } from './CastCard';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const getCastById = async id => {
      try {
        setIsLoading(true);
        const res = await fetchMovieCastById(Number(id));
        setCast(res.data.cast);
        //console.log(res.data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCastById(id);
  }, [id]);

  return (
    <Box>
      {isLoading && <Loader />}
      {cast.length > 0 && <CastCard cast={cast} />}
    </Box>
  );
};

export default Cast;
