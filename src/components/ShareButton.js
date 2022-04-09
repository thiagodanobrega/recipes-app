import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Share from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ShareButton = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const location = useLocation();

  const copyToClipboard = () => {
    copy(`http://localhost:3000${location.pathname.replace('/in-progress', '')}`);
    setCopiedLink(true);
    const TWO_SECONDS = 2000;
    setTimeout(() => { setCopiedLink(false); }, TWO_SECONDS);
  };
  return (
    <>
      <input
        type="image"
        data-testid="share-btn"
        alt="Share"
        src={ Share }
        height={ 26 }
        width={ 26 }
        onClick={ () => copyToClipboard() }
      />
      {
        copiedLink && (
          <p>
            Link copied!
          </p>
        )
      }
    </>
  );
};
export default ShareButton;
// teste do github com bug
