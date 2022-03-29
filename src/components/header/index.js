import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgageProfile from '../../images/profileIcon.svg';
import imgageSearch from '../../images/searchIcon.svg';

const Header = () => {
  const [showSearch, setShowSearch] = useState(true);

  return (

    <header>
      <form>
        <button
          type="button"
          name="profile-top-btn"
        >
          <Link to="/profile">Profile</Link>
          <img
            src={ imgageProfile }
            alt="desenho de uma silhueta humana"
            data-testid="profile-top-btn"
          />
        </button>

        <h1 data-testid="page-title">Foods</h1>

        <button
          type="button"
          data-testid="search-top-btn"
          onClick={ () => setShowSearch(!showSearch) }

        >
          <img src={ imgageSearch } alt="desenho de uma lupa" />
        </button>
        <input
          type="text"
          name="searchInput"
          data-testid="search-input"
          hidden={ showSearch }
        />
      </form>
    </header>
  );
};

export default Header;
