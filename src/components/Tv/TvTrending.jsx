import React from 'react';
import { useShows } from '../../hooks/use-moviesData';
import { requestUrl } from '../../apis';
import Movies from '../Movies/Movies';

const TvTrendings = () => {
  const {
    request: { tvTrendingShow, tvQuery },
  } = requestUrl();
  const { shows } = useShows(tvTrendingShow, tvQuery);

  return <Movies heading={'trending tv showss'} movies={shows} />;
};

export default TvTrendings;
