import React from 'react';
import classes from './GenereList.module.css';

const GenereList = (props) => {
  const urlImage = `https://image.tmdb.org/t/p/w500`;
  return (
    <section className={classes['genere-section']}>
      <div className={classes.genereMovies}>
        {props.movies.map((movie) => (
          <div key={movie.id} id={movie.id}>
            <img src={`${urlImage}${movie.poster_path}`} alt="movies" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenereList;
