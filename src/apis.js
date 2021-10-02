export const requestUrl = (id) => {
  const request = {
    movieUrl: `https://api.themoviedb.org/3`,
    tvShowUrl: `https://api.themoviedb.org/3/tv/`,
    imageUrl: `https://image.tmdb.org/t/p/w500`,
    allmovies: `/discover/movie?sort_by=popularity.desc`,
    topRatedMovies: '/movie/top_rated?',
    trendingMovies: `/trending/movie/week?`,
    tvShows: `/tv/on_the_air?`,
    tvTopRated: `/tv/top_rated?`,
    tvTrendingShow: `/tv/airing_today?`,
    tvQuery: `&language=en-US&page=1`,
    movidetails: `/movie/${id}`,
    tvDetails: `/tv/${id}`,
    genreTypes: `/genre/movie/list?`,
  };

  return { request };
};
