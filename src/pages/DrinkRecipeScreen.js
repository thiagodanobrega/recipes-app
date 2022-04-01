import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';

function DrinksRecipeScreen() {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <div>
      <h1 data-testid="page-title">Drinks</h1>
      <ProfilePicture />
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
      <BottomMenu />
    </div>
  );
}

export default DrinksRecipeScreen;
