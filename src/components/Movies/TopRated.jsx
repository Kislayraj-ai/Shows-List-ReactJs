import React from 'react';
import Movies from './Movies';
import { requestUrl } from '../../apis';
import { useShows } from '../../hooks/use-moviesData';

const TopRated = () => {
  const {
    request: { topRatedMovies },
  } = requestUrl();

  const { shows } = useShows(topRatedMovies);

  return <Movies heading={'top rated'} movies={shows} />;
};

export default TopRated;
