import React from 'react';
import { useLocation } from 'react-router-dom';
import Share from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ShareButton = () => {
  const location = useLocation();
  const copyToClipboard = () => {
    copy(location.pathname);
    global.alert('Link copied!');
  };
  return (
    <input
      type="image"
      data-testid="share-btn"
      alt="Share"
      src={ Share }
      height={ 50 }
      width={ 50 }
      onClick={ () => copyToClipboard() }
    />
  );
};
export default ShareButton;
