import React, { useState, useEffect } from 'react';
import classes from './Banner.module.css';
import { useShows } from '../../hooks/use-moviesData';
import { requestUrl } from '../../apis';

const Banner = () => {
  const [newResult, setNewResult] = useState([]);

  const {
    request: { tvShows, imageUrl },
  } = requestUrl();
  const { shows } = useShows(tvShows);

  let bannerUrl;
  useEffect(() => {
    if (shows.length > 0) {
      setNewResult(shows[Math.floor(Math.random() * shows.length)]);
    }
  }, [shows]);
  if (shows.length > 0) bannerUrl = `${imageUrl}${newResult.backdrop_path}`;

  return (
    <div
      key={newResult.id}
      className={classes.banner}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('${bannerUrl}')center/contain no-repeat`,
        // backgroundAttachment: 'fixed',
      }}
    ></div>
  );
};

export default Banner;
