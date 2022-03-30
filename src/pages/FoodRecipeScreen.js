import React from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';
import FormHeader from '../components/formHeader';

function FoodRecipeScreen() {
  return (
    <div>
      <Header />
      <h1 data-testid="page-title">Foods</h1>
      <FormHeader />
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
