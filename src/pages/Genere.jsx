import { useState, useEffect } from 'react';
import { useShows, useGenere } from '../hooks/use-moviesData';
import { requestUrl } from '../apis';
import GenereList from './GenereList';
import Loading from '../components/UI/Loading';
import classes from './Genere.module.css';

const Genere = () => {
  const [genereMovie, setGenereMovie] = useState([]);
  const [allShows, setAllShows] = useState([]);

  const {
    request: { allmovies, tvShows, tvQuery, genreTypes },
  } = requestUrl();

  const { genre, loading } = useGenere(genreTypes);
  const { shows } = useShows(allmovies);
  const { shows: tvResult } = useShows(tvShows, tvQuery);

  useEffect(() => {
    setGenereMovie(shows.concat(tvResult));
  }, [shows, tvResult]);

  useEffect(() => {
    setAllShows(genereMovie);
  }, [genereMovie]);

  let filterarray = [];
  const genereIdHandler = (e) => {
    genereMovie.forEach((item) => {
      item.genre_ids.filter((id) => {
        if (parseInt(e.target.id) === id) filterarray.push(item);
      });
      return;
    });
    setAllShows(filterarray);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className={classes['genere-container']}>
          <div className={classes.geneerButton}>
            {genre.map((genere) => (
              <button key={genere.id} id={genere.id} onClick={genereIdHandler}>
                {genere.name}
              </button>
            ))}
          </div>
          {allShows.length < 1 && (
            <h2 className={classes['no-results']}>
              <span>!No results matched &#128533;</span>
            </h2>
          )}

          <GenereList movies={allShows} />
        </section>
      )}
    </>
  );
};

export default Genere;
