import React, { useContext, useState } from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';
import FormHeader from '../components/formHeader';
import contextFoodRecipes from '../context/contextFoodRecipe/contextFoodRecipe';
// import Loading from '../components/loading';

function FoodRecipeScreen() {
  const { setUserChoice } = useContext(contextFoodRecipes);
  const [userChosetUserChoiceceOnclick, setUserChoiceOnclick] = useState('');

  const submitRadioValue = (e) => {
    e.preventDefault();
    console.log(e);
    setUserChoice(userChosetUserChoiceceOnclick);
  };

  return (
    <div>
      <Header />
      <h1 data-testid="page-title">Foods</h1>
      <FormHeader />
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
