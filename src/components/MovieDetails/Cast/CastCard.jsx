import { Box } from 'components/Box/Box';
const BASE_PICTURE_PATH = 'https://image.tmdb.org/t/p/w500';
const DUMMY_IMAGE_100 =
  'https://dummyimage.com/100x150/ddd/000000&text=no+image+available';

export const CastCard = ({ cast }) => {
  return cast.map(({ id, character, name, profile_path }) => {
    return (
      <Box key={id} ml={5}>
        <img
          src={
            profile_path ? BASE_PICTURE_PATH + profile_path : DUMMY_IMAGE_100
          }
          width="150"
          alt=""
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </Box>
    );
  });
};
