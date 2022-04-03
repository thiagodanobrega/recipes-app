import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextFoodRecipe from './contextFoodRecipe';
import useFetch from '../../hooks/useFetch';

function ProviderFoods({ children }) {
  const USER_INITIAL_STATE = {
    typeSearch: '',
    textSearch: '',
  };
  // estado das requisições FOODS
  const [foods, setFoods] = useState([]);

  // estado das escolhas do usuário tipo e texto
  const [userChoice, setUserChoice] = useState(USER_INITIAL_STATE);

  // chamada api
  const [callApi, setCallApi] = useState('');

  // ---------------------ENDPOINTS--------------------------------
  if (userChoice.typeSearch === 'ingredient') {
    const FOODS_INGREDIENT_API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${userChoice.textSearch}`;
    setCallApi(FOODS_INGREDIENT_API);
    setUserChoice({
      typeSearch: '',
      textSearch: '',
    });
  }

  if (userChoice.typeSearch === 'name') {
    const FOODS_NAME_API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userChoice.textSearch}`;
    setCallApi(FOODS_NAME_API);
    setUserChoice({
      typeSearch: '',
      textSearch: '',
    });
  }

  if (userChoice.typeSearch === 'firstLetter') {
    const FOODS_FIRST_LETTERS_API = `https://www.themealdb.com/api/json/v1/1/search.php?f=${userChoice.textSearch}`;
    setCallApi(FOODS_FIRST_LETTERS_API);
    setUserChoice({
      typeSearch: '',
      textSearch: '',
    });
  }

  // ----------------------------------------------

  const { data } = useFetch(callApi);

  useEffect(() => {
    if (data) { setFoods(data.meals); }
  }, [data]);

  const contextValue = {
    userChoice,
    setUserChoice,
    foods,
    setFoods,
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
