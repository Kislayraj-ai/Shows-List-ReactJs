import React from 'react';
import Movies from './Movies';
import { requestUrl } from '../../apis';
import { useShows } from '../../hooks/use-moviesData';

const Trending = () => {
  const {
    request: { trendingMovies },
  } = requestUrl();
  const { shows } = useShows(trendingMovies);

  return <Movies heading={'trending'} movies={shows} />;
};
export default Trending;
