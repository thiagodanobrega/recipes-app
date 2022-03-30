import React, { useState } from 'react';
import Header from '../components/header';
import searchIcon from '../images/searchIcon.svg';
import BottomMenu from '../components/BottomMenu';

function FoodRecipeScreen() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <Header />
      <h1 data-testid="page-title">Foods</h1>

      <input
        type="image"
        src={ searchIcon }
        alt="desenho de uma lupa"
        data-testid="search-top-btn"
        onClick={ () => setShowSearch(!showSearch) }
      />
      {
        showSearch && (
          <input
            type="text"
            name="searchInput"
            data-testid="search-input"
          />
        )
      }
      <form>

        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
            name="search"
            value="ingredient"
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="radio"
            id="name"
            data-testid="name-search-radio"
            name="search"
            value="name"
          />
        </label>
        <label htmlFor="firstLetter">
          First Letter
          <input
            type="radio"
            id="firstLetter"
            data-testid="first-letter-search-radio"
            name="search"
            value="firstLetter"
          />
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </form>
      <p>Tela principal de receitas de comidas</p>
      <BottomMenu />
    </div>
  );
}

export default FoodRecipeScreen;
