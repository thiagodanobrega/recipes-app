import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import InputSearchBar from './InputSearchBar';

const ProfilePicture = ({ renderScreen, nameScreen }) => {
  const history = useHistory();
  const [isSearch, setIsSearch] = useState(false);

  return (
    <header>

      <input
        id="profileIcon"
        data-testid="profile-top-btn"
        type="image"
        src={ profileIcon }
        alt="desenho de uma silhueta humana"
        onClick={ () => history.push('/profile') }
      />
      <h1 data-testid="page-title">{nameScreen}</h1>
      {
        renderScreen
          && <input
            type="image"
            src={ searchIcon }
            alt="desenho de uma lupa"
            data-testid="search-top-btn"
            onClick={ () => setIsSearch(!isSearch) }
          />
      }

      { isSearch === true ? <InputSearchBar /> : ''}

    </header>
  );
};

ProfilePicture.propTypes = {
  renderScreen: PropTypes.bool.isRequired,
  nameScreen: PropTypes.string.isRequired,
};

export default ProfilePicture;
