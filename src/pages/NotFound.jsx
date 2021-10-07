import React from 'react';
import NotFoundImage from '../Images/notFound.svg';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// for not found page css properties is in index.css

const NotFound = () => {
  return (
    <div className="not-found">
      <Link to="/movies">
        <button>
          <FaAngleLeft /> Take me back
        </button>
      </Link>
      <img src={NotFoundImage} alt="notfound" />
    </div>
  );
};

export default NotFound;
