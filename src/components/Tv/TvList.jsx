import React from 'react';
import { useShows } from '../../hooks/use-moviesData';
import { requestUrl } from '../../apis';
import Movies from '../Movies/Movies';

const TvList = () => {
  const {
    request: { tvShows, tvQuery },
  } = requestUrl();
  const { shows } = useShows(tvShows, tvQuery);

  return (
    <Movies info={'tv'} heading={'all shows'} movies={shows} showLink={true} />
  );
};

export default TvList;
