import React, { useState, useEffect, useContext } from 'react';
import contextFoodRecipe from '../../context/contextFoodRecipe/contextFoodRecipe';
import contextDrinks from '../../context/contextDrinks/contextDrinks';
import searchIcon from '../../images/searchIcon.svg';

const InputSearchBar = () => {
  const {
    setFoodsIngredients,
    setFoodsName,
    setFoodsFirstLetter,
  } = useContext(contextFoodRecipe);

  const {
    setDrinksIngredients,
    setDrinksNameMeals,
    setDrinksFirstLetter,
  } = useContext(contextDrinks);
  // estado local do usuario
  const [showSearch, setShowSearch] = useState(false);
  const [inputText, setInputText] = useState('');
  const [searchForIngredient, setSearchForIngredient] = useState('');
  const [searchForName, setSearchForName] = useState('');
  const [searchForFirst, setSearchForFirst] = useState('');
  const [callApi, setCallApi] = useState('');
  // ---------------------ENDPOINTS--------------------------------

  const FOODS_INGREDIENT_API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${callApi}`;
  const FOODS_NAME_MEAL_API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${callApi}`;
  const FOODS_FIRST_LETTER_MEALS_API = `https://www.themealdb.com/api/json/v1/1/search.php?f=${callApi}`;
  // ----------------------------------------------
  // ----------------------------------------------
  console.log(callApi);
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
      console.log(drinksIngredientsData);
      setDrinksIngredients(drinksIngredientsData);
    })();
  }, [DRINKS_INGREDIENT_API, setDrinksIngredients, searchForIngredient]);

  // requisição nome drink
  useEffect(() => {
    (async () => {
      const response = await fetch(DRINKS_NAME_API);
      const drinksNameData = await response.json();
      setDrinksNameMeals(drinksNameData);
    })();
  }, [DRINKS_NAME_API, setDrinksNameMeals]);

  // requisição de first letters
  useEffect(() => {
    (async () => {
      const response = await fetch(DRINKS_FIRST_LETTER_API);
      const drinksfirstLetterData = await response.json();
      setDrinksFirstLetter(drinksfirstLetterData);
    })();
  }, [DRINKS_FIRST_LETTER_API, setDrinksFirstLetter]);

  // -------- FUNÇÕES DOS INPUTS ----------
  const showSearchOnClick = (e) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  const onChangeInputText = ({ target: { value } }) => setInputText(value);

  const submitRequest = (e) => {
    e.preventDefault();
    // verificaçao da digitação
    const verifyLetter = [...inputText];
    if (verifyLetter.length !== 1 && searchForFirst) {
      global.alert('Your search must have only 1 (one) character');
      return setSearchForFirst('');
    }
    //  chamada API
    if (searchForName) setCallApi(inputText);
    if (searchForFirst) setCallApi(inputText);
    if (searchForIngredient) setCallApi(inputText);
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
        )

      }

    </form>

  );
};

export default InputSearchBar;
