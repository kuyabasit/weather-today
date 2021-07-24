import React, { Fragment } from 'react';
import Search from '../weather/Search';
import Weather from '../weather/Weather';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Weather />
    </Fragment>
  );
};

export default Home;
