import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ContextFoodRecipe from './contextFoodRecipe';

function ProviderFoods({ children }) {
  // estado das requisições
  const [ingredients, setIngredients] = useState([]);
  const [nameMeals, setNameMeals] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [firstLetter, setFirstLetter] = useState([]);
  // estado do texto do user
  const [userTypedText, setUserTypedText] = useState('');

  const contextValue = {
    ingredients,
    setIngredients,
    nameMeals,
    setNameMeals,
    nationalities,
    setNationalities,
    categories,
    setCategories,
    firstLetter,
    setFirstLetter,

    userTypedText,
    setUserTypedText,
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
