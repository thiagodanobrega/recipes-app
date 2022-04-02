import React, { useState, useEffect, useContext } from 'react';
import contextFoodRecipe from '../../context/contextFoodRecipe/contextFoodRecipe';

import searchIcon from '../../images/searchIcon.svg';

const InputSearchBar = () => {
  const {
    setFoodsIngredients,
    setFoodsName,
    setFoodsFirstLetter,
    setDrinksIngredients,
    setDrinksNameMeals,
    setDrinksFirstLetterMeals,
  } = useContext(contextFoodRecipe);

  // estado local do usuario
  const [showSearch, setShowSearch] = useState(false);
  const [inputText, setInputText] = useState('');
  const [searchFor, setSearchFor] = useState('');
  const [callApi, setCallApi] = useState('');
  // ---------------------ENDPOINTS--------------------------------

  const FOODS_INGREDIENT_API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${callApi}`;
  const FOODS_NAME_MEAL_API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${callApi}`;
  const FOODS_FIRST_LETTER_MEALS_API = `https://www.themealdb.com/api/json/v1/1/search.php?f=${callApi}`;

  const DRINKS_INGREDIENT_API = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${callApi}`;
  const DRINKS_NAME_API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${callApi}`;
  const DRINKS_FIRST_LETTER_API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${callApi}`;

  // ----------FOOODS-------------------
  // requisição  ingredientes
  useEffect(() => {
    (async () => {
      const response = await fetch(FOODS_INGREDIENT_API);
      const ingredientsData = await response.json();
      setFoodsIngredients(ingredientsData.meals);
    })();
  }, [FOODS_INGREDIENT_API, setFoodsIngredients]);

  // requisição  nome
  useEffect(() => {
    (async () => {
      const response = await fetch(FOODS_NAME_MEAL_API);
      const nameData = await response.json();
      setFoodsName(nameData.meals);
    })();
  }, [FOODS_NAME_MEAL_API, setFoodsName]);

  // requisição  first letters
  useEffect(() => {
    (async () => {
      const response = await fetch(FOODS_FIRST_LETTER_MEALS_API);
      const firstLetterData = await response.json();
      console.log(firstLetterData);
      setFoodsFirstLetter(firstLetterData.meals);
    })();
  }, [FOODS_FIRST_LETTER_MEALS_API, setFoodsFirstLetter]);

  // requisição de categorias
  /*   useEffect(() => {
    (async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const dataCategories = await response.json();
      setCategories(dataCategories.meals);
      console.log('estou no foodRecipeScreen');
    })();
  }, [setCategories]); */

  // requisição de nationalities
  /*   useEffect(() => {
    (async () => {
      const response = await fetch(' https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const nationality = await response.json();
      setNationalities(nationality.meals);
    })();
  }, [setNationalities]); */

  // --------DRINKS---------------
  // requisição de ingredientes drink
  useEffect(() => {
    (async () => {
      const response = await fetch(DRINKS_INGREDIENT_API);
      const drinksIngredientsData = await response.json();
      setDrinksIngredients(drinksIngredientsData.meals);
    })();
  }, [DRINKS_INGREDIENT_API, setDrinksIngredients]);

  // requisição nome drink
  useEffect(() => {
    (async () => {
      const response = await fetch(DRINKS_NAME_API);
      const drinksNameData = await response.json();
      setDrinksNameMeals(drinksNameData.meals);
    })();
  }, [DRINKS_NAME_API, setDrinksNameMeals]);

  // requisição de first letters
  useEffect(() => {
    (async () => {
      const response = await fetch(DRINKS_FIRST_LETTER_API);
      const drinksfirstLetterData = await response.json();
      setDrinksFirstLetterMeals(drinksfirstLetterData.meals);
    })();
  }, [DRINKS_FIRST_LETTER_API, setDrinksFirstLetterMeals]);

  // -------- FUNÇÕES DOS INPUTS ----------
  const showSearchOnClick = (e) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  const onChangeInputText = ({ target: { value } }) => {
    setInputText(value);
  };

  const submitRequest = (e) => {
    e.preventDefault();
    // verificaçao da digitação
    const verifyLetter = [...inputText];
    if (verifyLetter.length !== 1 && searchFor === 'firstLetter') {
      return global.alert('Your search must have only 1 (one) character');
    }
    // seta a chamada de acordo com tipo de radioButton
    switch (searchFor) {
    case 'ingredient': setCallApi(inputText);
      break;
    case 'name': setCallApi(inputText);
      break;
    case 'firstLetter': setCallApi(inputText);
      break;
    default:
    }
  };

  return (
    <form onSubmit={ submitRequest }>
      <input
        type="image"
        src={ searchIcon }
        alt="desenho de uma lupa"
        data-testid="search-top-btn"
        onClick={ showSearchOnClick }
      />
      {
        showSearch && (
          <div onChange={ onChangeInputText }>
            <input
              type="text"
              name="searchInput"
              data-testid="search-input"

            />

            <label htmlFor="ingredient">
              Ingredient
              <input
                type="radio"
                id="ingredient"
                data-testid="ingredient-search-radio"
                name="search"
                value="ingredient"
                onClick={ ({ target: { value } }) => setSearchFor(value) }
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
                onClick={ ({ target: { value } }) => setSearchFor(value) }
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
                onClick={ ({ target: { value } }) => setSearchFor(value) }
              />
            </label>
            <button
              type="submit"
              data-testid="exec-search-btn"
            >
              Search
            </button>
          </div>
        )

      }

    </form>

  );
};

export default InputSearchBar;
