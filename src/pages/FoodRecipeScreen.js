import React, { useContext, useState } from 'react';
import ProfilePicture from '../components/Header/ProfilePicture';
import BottomMenu from '../components/BottomMenu';
import InputText from '../components/Header/InputText';
import contextFoodRecipes from '../context/contextFoodRecipe/contextFoodRecipe';
// import Loading from '../components/loading';

function FoodRecipeScreen() {
  const { setUserChoiceTypeSearch } = useContext(contextFoodRecipes);
  const [userChosetUserChoiceceOnclick, setUserChoiceOnclick] = useState('');

  const submitRadioValue = (e) => {
    e.preventDefault();
    setUserChoiceTypeSearch(userChosetUserChoiceceOnclick);
  };

  return (
    <div>
      <ProfilePicture />
      <h1 data-testid="page-title">Foods</h1>
      <InputText />
      <form onSubmit={ submitRadioValue }>
        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
            name="search"
            value="ingredient"
            onClick={ ({ target: { value } }) => setUserChoiceOnclick(value) }
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
            onClick={ ({ target: { value } }) => setUserChoiceOnclick(value) }
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
            onClick={ ({ target: { value } }) => setUserChoiceOnclick(value) }
          />
        </label>
        <button
          type="submit"
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
