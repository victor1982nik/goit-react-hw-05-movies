import { NavLink, Outlet } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import styled from 'styled-components';

const Link = styled(NavLink)`
  color: black;
  margin: 10px;
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <Box as="header" pt={4} pb={4} borderBottom="normal">
        <Box as="nav" pl={4}>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};
