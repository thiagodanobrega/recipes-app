import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ContextFoodRecipe from './contextFoodRecipe';

function ProviderFoods({ children }) {
  // estado das requisições FOODS
  const [foodsIngredients, setFoodsIngredients] = useState([]);
  const [foodsName, setFoodsName] = useState([]);
  const [foodsFirstLetter, setFoodsFirstLetter] = useState([]);

  const [userChoice, setUserChoice] = useState({
    typeSearch: '',
    textSearch: '',
  });
  /*
  const [nationalities, setNationalities] = useState([]);
  const [categories, setCategories] = useState([]);
  */
  /*
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [drinksNameMeals, setDrinksNameMeals] = useState([]);
  const [drinksFirstLetter, setDrinksFirstLetterMeals] = useState([]); */
  const [callApi, setCallApi] = useState('');

  const {
    setDrinksIngredients,
    setDrinksNameMeals,
    setDrinksFirstLetter,
  } = useContext(contextDrinks);
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
      console.log(nameData.meals);
      setFoodsName(nameData.meals);
    })();
  }, [FOODS_NAME_MEAL_API, setFoodsName]);

  // requisição  first letters
  useEffect(() => {
    (async () => {
      const response = await fetch(FOODS_FIRST_LETTER_MEALS_API);
      const firstLetterData = await response.json();
      setFoodsFirstLetter(firstLetterData.meals);
    })();
  }, [FOODS_FIRST_LETTER_MEALS_API, setFoodsFirstLetter]);

  // --------DRINKS---------------
  // requisição de ingredientes drink
  useEffect(() => {
    (async () => {
      const response = await fetch(DRINKS_INGREDIENT_API);
      const drinksIngredientsData = await response.json();
      console.log(drinksIngredientsData.drinks);
      setDrinksIngredients(drinksIngredientsData);
    })();
  }, [DRINKS_INGREDIENT_API, setDrinksIngredients]);

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
  const contextValue = {
    userChoice,
    setUserChoice,
    foodsIngredients,
    setFoodsIngredients,
    foodsName,
    setFoodsName,
    foodsFirstLetter,
    setFoodsFirstLetter,

    /*
    nationalities,
    setNationalities,
    categories,
    setCategories,
    , */
    /* drinksIngredients,
    setDrinksIngredients,
    drinksNameMeals,
    setDrinksNameMeals,
    drinksFirstLetter,
    setDrinksFirstLetterMeals, */
  };
  return (
    <ContextFoodRecipe.Provider value={ contextValue }>
      {children}
    </ContextFoodRecipe.Provider>
  );
}
ProviderFoods.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderFoods;
