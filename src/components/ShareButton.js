import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Share from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ShareButton = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const location = useLocation();

  const copyToClipboard = () => {
    copy(location.pathname);
    setCopiedLink(true);
  };
  return (
    <>
      <input
        type="image"
        data-testid="share-btn"
        alt="Share"
        src={ Share }
        height={ 50 }
        width={ 50 }
        onClick={ () => copyToClipboard() }
      />
      {
        copiedLink && (
          <p>
            link copied!
          </p>
        )
      }
    </>
  );
};
export default ShareButton;
// teste do github com bug
