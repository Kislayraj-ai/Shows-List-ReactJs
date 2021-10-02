import React from 'react';
import MovieList from '../components/Movies/MoviesList';
import Trending from '../components/Movies/TrendingMovie';
import TopRated from '../components/Movies/TopRated';

const MoviesPage = () => {
  return (
    <>
      <MovieList />
      <Trending />
      <TopRated />
    </>
  );
};
export default MoviesPage;
