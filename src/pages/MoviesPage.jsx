import React from 'react';
import MovieList from '../components/Movies/MoviesList';
import Trending from '../components/Movies/TrendingMovie';
import TopRated from '../components/Movies/TopRated';
import Banner from '../components/banner/Banner';

const MoviesPage = () => {
  return (
    <>
      <Banner />
      <MovieList />
      <Trending />
      <TopRated />
    </>
  );
};
export default MoviesPage;
