import React, { useState } from 'react';
import Header from '../components/header';
import searchIcon from '../images/searchIcon.svg';

function DinksRecipeScreen() {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <div>
      <h1 data-testid="page-title">Drinks</h1>
      <Header />
      <form>
        <input
          type="image"
          src={ searchIcon }
          alt="desenho de uma lupa"
          data-testid="search-top-btn"
          onClick={ () => setShowSearch(!showSearch) }
        />

        <input
          type="text"
          name="searchInput"
          data-testid="search-input"
          hidden={ showSearch }
        />
      </form>
    </div>
  );
}

export default DinksRecipeScreen;
