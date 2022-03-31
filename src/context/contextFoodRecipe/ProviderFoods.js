import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ContextFoodRecipe from './contextFoodRecipe';

function ProviderFoods({ children }) {
  const [ingredients, setIngredients] = useState([]);
  const [nameMeals, setNameMeals] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [firstLetter, setFirstLetter] = useState([]);
  const [userChoice, setUserChoice] = useState('');

  console.log(userChoice);

  // requisição de ingredientes
  useEffect(() => {
    (async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const dataIngredients = await response.json();
      setIngredients(dataIngredients.meals);
      console.log('loguei');
    })();
  }, []);

  // requisição de categorias
  useEffect(() => {
    (async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const dataCategories = await response.json();
      setCategories(dataCategories.meals);
      console.log('loguei');
    })();
  }, []);

  // requisição de nationalities
  useEffect(() => {
    (async () => {
      const response = await fetch(' https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const nationality = await response.json();
      setNationalities(nationality.meals);
      console.log('loguei');
    })();
  }, []);

  // requisição de first letters
  useEffect(() => {
    (async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      const firstLetterData = await response.json();
      setFirstLetter(firstLetterData.meals);
      console.log('loguei firstLetter', firstLetterData.meals);
    })();
  }, []);

  // requisição por nome
  useEffect(() => {
    (async () => {
      const response = await fetch(`www.themealdb
      .com/api/json/v1/1/search.php?s=Arrabiata`);
      const nameData = await response.json();
      console.log('loguei Name', nameData);
      setNameMeals(nameData.meals);
    })();
  }, []);

  const contextValue = {
    ingredients,
    nameMeals,
    nationalities,
    categories,
    firstLetter,
    userChoice,
    setUserChoice,
    setIngredients,
    setNameMeals,
    setNationalities,
    setCategories,
    setFirstLetter,

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
