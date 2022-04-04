import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextFoodRecipe from './contextFoodRecipe';
import useFetch from '../../hooks/useFetch';

function ProviderFoods({ children }) {
  const USER_INITIAL_STATE = {
    typeSearch: '',
    textSearch: '',
    categoryFoods: '',
    recipeID: '',
  };
  // estado que  verifica se há só uma receita (para renderizar condicionalmente o data-testid)
  const [isOnlyThisRecipe, setIsOnlyThisRecipe] = useState(false);
  // estado das requisições FOODS
  const [allFoodsData, setAllFoodsData] = useState([]); // todas comidas renderizadas por nome
  const [error, setError] = useState('');
  const [foods, setFoods] = useState([]); // lista de comidas escolhidas pelo usuário

  // estado das escolhas do usuário tipo de pesquisa, texto do input e categoria
  const [userChoiceFoods, setUserChoiceFoods] = useState(USER_INITIAL_STATE);

  // callAPi chamada api de acordo com o tipo de pesquisa do usuario
  const [callApi, setCallApi] = useState('');

  // ---------------------ENDPOINTS--------------------------------
  const { typeSearch, textSearch, categoryFoods /* , recipeID */ } = userChoiceFoods;

  /*  if (recipeID) {
    const RECIPEID_API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`;
    setCallApi(RECIPEID_API);
    setUserChoiceFoods(USER_INITIAL_STATE);
  } */

  if (categoryFoods) {
    const CATEGORY_API = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryFoods}`;
    setCallApi(CATEGORY_API);
    setUserChoiceFoods(USER_INITIAL_STATE);
  }
  if (typeSearch === 'ingredient') {
    const FOODS_INGREDIENT_API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${textSearch}`;
    setCallApi(FOODS_INGREDIENT_API);
    setUserChoiceFoods(USER_INITIAL_STATE);
  }

  if (typeSearch === 'name' || categoryFoods === 'All') {
    const FOODS_NAME_API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textSearch}`;
    setCallApi(FOODS_NAME_API);
    setUserChoiceFoods(USER_INITIAL_STATE);
  }

  if (typeSearch === 'firstLetter') {
    const FOODS_FIRST_LETTERS_API = `https://www.themealdb.com/api/json/v1/1/search.php?f=${textSearch}`;
    setCallApi(FOODS_FIRST_LETTERS_API);
    setUserChoiceFoods(USER_INITIAL_STATE);
  }

  // ----------------------------------------------

  const { data, isLoading } = useFetch(callApi);

  useEffect(() => {
    if (data) { setFoods(data.meals); }
  }, [data]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const dataAPI = await response.json();
        setAllFoodsData(dataAPI.meals);
      } catch (erro) {
        setError(erro.message);
      }
    })();
  }, []);

  const contextValue = {
    isOnlyThisRecipe,
    setIsOnlyThisRecipe,
    allFoodsData,
    error,
    userChoiceFoods,
    setUserChoiceFoods,
    foods,
    setFoods,
    isLoading,
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
