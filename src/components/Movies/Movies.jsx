import React from 'react';
import classes from './Movies.module.css';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { requestUrl } from '../../apis';
const Movies = (props) => {
  const {
    request: { imageUrl },
  } = requestUrl();

  return (
    <section className={classes['movie-section']}>
      <h3>{props.heading}</h3>
      <div className={classes.movies}>
        {props.movies.map((movie) => (
          <div key={movie.id} id={movie.id}>
            <img
              className={classes.images}
              width={props.width}
              height={props.height}
              src={`${imageUrl}${movie.poster_path}`}
              alt="movies"
            />
            {props.showLink && (
              <span className={classes.details}>
                <Link
                  className="links"
                  to={`/details/${props.info}/${movie.id}`}
                >
                  details <FaInfoCircle />
                </Link>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Movies;
