import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ContextDrinks from './contextDrinks';

function ProviderDrinks({ children }) {
  // estado das requisições DRINKS
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [drinksNameMeals, setDrinksNameMeals] = useState([]);
  const [drinksFirstLetter, setDrinksFirstLetter] = useState([]);

  const contextValue = {
    drinksIngredients,
    setDrinksIngredients,
    drinksNameMeals,
    setDrinksNameMeals,
    drinksFirstLetter,
    setDrinksFirstLetter,
  };
  return (
    <ContextDrinks.Provider value={ contextValue }>
      {children}
    </ContextDrinks.Provider>
  );
}
ProviderDrinks.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderDrinks;
