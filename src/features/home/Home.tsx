import Box from '@material-ui/core/Box';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Box>
    <h1>Home</h1>
    <Link to="/customers">Customer Management</Link>
  </Box>
);

export default React.memo(Home);
