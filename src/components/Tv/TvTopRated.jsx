import React from 'react';
import { useShows } from '../../hooks/use-moviesData';
import { requestUrl } from '../../apis';
import Movies from '../Movies/Movies';

const TvTopRated = () => {
  const {
    request: { tvTopRated, tvQuery },
  } = requestUrl();
  const { shows } = useShows(tvTopRated, tvQuery);

  return <Movies heading={'top rated tv shows'} movies={shows} />;
};

export default TvTopRated;
