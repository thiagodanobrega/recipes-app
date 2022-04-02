import React, { useState, useContext } from 'react';
import contextFoodRecipe from '../../context/contextFoodRecipe/contextFoodRecipe';
/* import contextDrinks from '../../context/contextDrinks/contextDrinks'; */

const InputSearchBar = () => {
  const {
    setUserChoice,
  } = useContext(contextFoodRecipe);

  // estado local do usuario
  const [userSearchText, setUserSearchText] = useState('');
  const [userSearchType, setUserSearchType] = useState('');
  // -------- FUNÇÕES DOS INPUTS ----------

  const submitRequest = (event) => {
    event.preventDefault();
    // verificaçao da digitação
    const verifyLetter = [...userSearchText];
    if (verifyLetter.length !== 1 && userSearchType === 'firstLetter') {
      global.alert('Your search must have only 1 (one) character');
      return setUserSearchType('');
    }
    //  envia para o estado global
    setUserChoice({
      typeSearch: userSearchType,
      textSearch: userSearchText,
    });
  };

  return (
    <form onSubmit={ submitRequest }>
      <div>
        <input
          type="text"
          name="searchInput"
          data-testid="search-input"
          onChange={ ({ target: { value } }) => setUserSearchText(value) }
        />

        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
            name="search"
            value="ingredient"
            onClick={ ({ target: { value } }) => setUserSearchType(value) }
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
            onClick={ ({ target: { value } }) => setUserSearchType(value) }
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
            onClick={ ({ target: { value } }) => setUserSearchType(value) }
          />
        </label>
        <button
          type="submit"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default InputSearchBar;
