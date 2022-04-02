import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ContextFoodRecipe from './contextFoodRecipe';

function ProviderFoods({ children }) {
  // estado das requisições FOODS
  const [foodsIngredients, setFoodsIngredients] = useState([]);
  const [foodsName, setFoodsName] = useState([]);
  const [foodsFirstLetter, setFoodsFirstLetter] = useState([]);
  /*
  const [nationalities, setNationalities] = useState([]);
  const [categories, setCategories] = useState([]);
  */

  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [drinksNameMeals, setDrinksNameMeals] = useState([]);
  const [drinksFirstLetter, setDrinksFirstLetterMeals] = useState([]);

  const contextValue = {
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
    drinksIngredients,
    setDrinksIngredients,
    drinksNameMeals,
    setDrinksNameMeals,
    drinksFirstLetter,
    setDrinksFirstLetterMeals,
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
