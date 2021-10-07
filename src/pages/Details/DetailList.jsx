import { useState, useEffect } from 'react';
import { requestUrl } from '../../apis';
import VideoModal from '../../components/UI/Modal';
import { useTrailor } from '../../hooks/use-moviesData';
import YouTube from 'react-youtube';
import starImage from '../../Images/star.png';
import { FaPlay } from 'react-icons/fa';
import classes from './Details.module.css';

const DetailList = (props) => {
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState([]);
  const [trailorKeyId, setTrailorKey] = useState();
  const { detail, keyId } = props;
  const [close, setClose] = useState(false);

  const {
    request: { imageUrl },
  } = requestUrl(keyId);

  const pathName = window.location.pathname;
  const trailorUrl = pathName.slice(8);
  const { trailor } = useTrailor(`${trailorUrl}/videos`);

  useEffect(() => {
    trailor.length > 0 && setTrailorKey(trailor[0].key);
  }, [trailor]);

  useEffect(() => {
    let getGenre = [];
    if (detail.genres) {
      getGenre = detail.genres.map((genre) => {
        return genre.name;
      });
    }
    setGenre(getGenre);
  }, [detail]);

  useEffect(() => {
    let getLanguage = [];
    if (detail.genres) {
      getLanguage = detail.spoken_languages.map((lang) => {
        return lang.english_name;
      });
    }
    setLanguage(getLanguage);
  }, [detail]);

  const closeHandler = () => {
    setClose(false);
  };
  const openHandler = () => {
    setClose(true);
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };
  const opts = {
    height: '500',
    width: '700',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {close && (
        <VideoModal onClose={closeHandler}>
          <YouTube
            className={classes.youtube}
            videoId={`${trailorKeyId}`}
            opts={opts}
            onReady={onReady}
          />
        </VideoModal>
      )}

      <div className={classes['img-container']}>
        <img src={`${imageUrl}${detail.poster_path}`} alt="detailsImage" />
      </div>
      <div className={classes['details-content']}>
        <button onClick={openHandler} className={classes['watch-trailor']}>
          <FaPlay /> watch trailor
        </button>

        <span>
          <p>title </p> {detail.title || detail.original_name}
        </span>
        <span>
          <p>genere </p>

          {genre.map((item) => item).join('_')}
        </span>

        <span>
          <p>languages </p>
          {language.map((item) => item).join('_') || 'No Info'}
        </span>
        <span>
          <p>budget </p>
          {detail.budget ? `$${detail.budget}` : 'No Info'}
        </span>

        <span>
          <p>tagline </p>
          {detail.tagline || detail.title || detail.original_name}
        </span>
        <span>
          <p>runtime </p>
          {detail.runtime || 'No Info'}
        </span>
        <span>
          <p>release date : </p>
          {detail.release_date || 'No Info '}
        </span>
        <span>
          <p>status </p> {detail.status || 'No Info'}
        </span>

        <div className={classes.overView}>
          <span>
            <img src={starImage} alt="star" />
            votes {detail.vote_count || 'No Info'}
          </span>
          <h3>OverView </h3>
          {detail.overview}
        </div>
      </div>
    </>
  );
};

export default DetailList;
