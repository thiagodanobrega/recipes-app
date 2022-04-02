import React, { useState } from 'react';
import contextFoodRecipe from '../../context/contextFoodRecipe/contextFoodRecipe';
import contextDrinks from '../../context/contextDrinks/contextDrinks';

const InputSearchBar = () => {
  const {
    setUserChoice,
  } = useContext(contextFoodRecipe);

  // estado local do usuario
  const [inputSearchText, setInputSearchText] = useState('');
  const [userSearchType, setUserSearchType] = useState('');

  // -------- FUNÇÕES DOS INPUTS ----------

  const onChangeInputText = ({ target: { value } }) => setInputText(value);

  const submitRequest = (event) => {
    event.preventDefault();
    // verificaçao da digitação
    const verifyLetter = [...inputText];
    if (verifyLetter.length !== 1 && searchForFirst) {
      global.alert('Your search must have only 1 (one) character');
      return setSearchForFirst('');
    }
    //  chamada API e redireciona
    if (searchForName) {
      setCallApi(inputText);
      console.log(foodsName);
    }
    if (searchForFirst) setCallApi(inputText);
    if (searchForIngredient) setCallApi(inputText);
  };

  return (
    <form onSubmit={ submitRequest }>
      <div>
        <input
          type="text"
          name="searchInput"
          data-testid="search-input"
          onChange={ onChangeInputText }
        />

        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
            name="search"
            value="ingredient"
            onClick={ ({ target: { value } }) => setSearchForIngredient(value) }
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
            onClick={ ({ target: { value } }) => setSearchForName(value) }
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
            onClick={ ({ target: { value } }) => setSearchForFirst(value) }
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
