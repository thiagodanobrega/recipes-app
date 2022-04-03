import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextDrinks from './contextDrinks';
import useFetch from '../../hooks/useFetch';

function ProviderDrinks({ children }) {
  const USER_INITIAL_STATE = {
    typeSearch: '',
    textSearch: '',
  };
  // estado das requisições DRINKS
  const [drinks, setDrinks] = useState([]);

  // estado das escolhas do usuário tipo e texto
  const [userChoice, setUserChoice] = useState(USER_INITIAL_STATE);

  // chamada api
  const [callApi, setCallApi] = useState('');

  // ---------------------ENDPOINTS--------------------------------

  if (userChoice.typeSearch === 'ingredient') {
    const DRINKS_INGREDIENT_API = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userChoice.textSearch}`;
    setCallApi(DRINKS_INGREDIENT_API);
    setUserChoice({
      typeSearch: '',
      textSearch: '',
    });
  }

  if (userChoice.typeSearch === 'name') {
    const DRINKS_NAME_API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userChoice.textSearch}`;
    setCallApi(DRINKS_NAME_API);
    setUserChoice({
      typeSearch: '',
      textSearch: '',
    });
  }

  if (userChoice.typeSearch === 'firstLetter') {
    const DRINKS_FIRST_LETTER_API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${userChoice.textSearch}`;
    setCallApi(DRINKS_FIRST_LETTER_API);
    setUserChoice({
      typeSearch: '',
      textSearch: '',
    });
  }
  const { data } = useFetch(callApi);

  useEffect(() => {
    if (data) { setDrinks(data.drinks); }
  }, [data]);

  const contextValue = {
    drinks,
    setDrinks,
    userChoice,
    setUserChoice,
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
