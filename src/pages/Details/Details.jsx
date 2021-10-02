import React from 'react';
import { useParams } from 'react-router';
import { requestUrl } from '../../apis';
import { useDeatils, useShows } from '../../hooks/use-moviesData';
import DetailList from './DetailList';
import classes from './Details.module.css';

const Details = () => {
  const { id } = useParams();
  const pathName = window.location.pathname;
  const trailorUrl = pathName.slice(8);
  const { detail } = useDeatils(trailorUrl);

  const {
    request: { imageUrl },
  } = requestUrl();

  const backGroundPath = `${imageUrl}${detail.poster_path}`;
  return (
    <section
      className={classes['details-container']}
      style={{
        background: ` linear-gradient(rgba(78, 78, 78, 0.9), rgba(63, 57, 57, 0.9)),url('${backGroundPath}')center/cover no-repeat`,
      }}
    >
      <DetailList detail={detail} keyId={id} />
    </section>
  );
};

export default Details;
