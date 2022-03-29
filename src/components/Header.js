import React from 'react';

const Header = () => (

  <header>
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
      >
        <img src="src/images/profileIcon.svg" alt="desenho de uma silhueta humana" />
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
