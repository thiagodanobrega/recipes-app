import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (

  <header>
    <div>
      <button
        type="button"
        name="profile-top-btn"
      >
        <Link to="/sobre">Sobre</Link>
        <img
          src="src/images/profileIcon.svg"
          alt="desenho de uma silhueta humana"
          data-testid="profile-top-btn"
        />
      </button>

      <h1 data-testid="page-title">Foods</h1>

      <button
        type="button"
        data-testid="search-top-btn"
      >
        <img src="src/images/searchIcon.svg" alt="desenho de uma lupa" />
      </button>
    </div>
  </header>
);

export default Header;
