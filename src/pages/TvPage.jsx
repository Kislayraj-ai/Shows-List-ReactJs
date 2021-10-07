import React from 'react';
import TvList from '../components/Tv/TvList';
import TvTopRated from '../components/Tv/TvTopRated';
import TvTrendings from '../components/Tv/TvTrending';

const TvPage = () => {
  return (
    <>
      <TvList />
      <TvTopRated />
      <TvTrendings />
    </>
  );
};

export default TvPage;
