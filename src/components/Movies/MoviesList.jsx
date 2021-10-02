import React from 'react';
import Movies from './Movies';
import { useShows } from '../../hooks/use-moviesData';
import { requestUrl } from '../../apis';

const MovieList = () => {
  const {
    request: { allmovies },
  } = requestUrl();

  const { shows } = useShows(allmovies);

  return (
    <Movies
      info={'movie'}
      heading={'all movies'}
      movies={shows}
      width={120}
      height={170}
      showLink={true}
    />
  );
};

export default MovieList;
