import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';

const Header = () => {
  const history = useHistory();
  return (
    <>
      <header>

        <input
          id="profileIcon"
          data-testid="profile-top-btn"
          type="image"
          src={ profileIcon }
          alt="desenho de uma silhueta humana"
          onClick={ () => history.push('/profile') }
        />

      </header>
      <div />
    </>
  );
};

export default Header;
