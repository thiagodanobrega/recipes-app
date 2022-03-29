import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgageProfile from '../../images/profileIcon.svg';
import imgageSearch from '../../images/searchIcon.svg';

const Header = () => {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <>
      <header>
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
      </header>
      <div>
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
          <input
            type="text"
            name="searchInput"
            data-testid="search-input"
            hidden={ showSearch }
          />
        </form>
      </div>
    </>
  );
};

export default Header;
