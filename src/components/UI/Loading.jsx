import React from 'react';
import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div className={classes.loader}>
      <span className={classes.span}>
        <p>L</p>
      </span>
      <span className={classes.span}>
        <p>O</p>
      </span>
      <span className={classes.span}>
        <p>A</p>
      </span>
      <span className={classes.span}>
        <p>D</p>
      </span>
      <span className={classes.span}>
        <p>I</p>
      </span>
      <span className={classes.span}>
        <p>N</p>
      </span>
      <span className={classes.span}>
        <p>G</p>
      </span>
    </div>
  );
};

export default Loading;
