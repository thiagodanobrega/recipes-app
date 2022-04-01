import React, { useContext, useState, useEffect } from 'react';
import ProfilePicture from '../components/Header/ProfilePicture';
import BottomMenu from '../components/BottomMenu';
import InputText from '../components/Header/InputText';
import contextFoodRecipes from '../context/contextFoodRecipe/contextFoodRecipe';
// import Loading from '../components/loading';

function FoodRecipeScreen() {
// contextFood
  const { userTypedText,
    setIngredients,
    setNameMeals,
    setFirstLetter,
  } = useContext(contextFoodRecipes);

  // estado local do usuario
  const [searchFor, setSearchFor] = useState('');
  const [callApi, setCallApi] = useState('');
  //--------------------------------------------------------

  const submitRequest = (e) => {
    e.preventDefault();
    const verifyLetter = [...userTypedText];
    if (verifyLetter.length !== 1 && searchFor === 'firstLetter') {
      return global.alert('Your search must have only 1 (one) character');
    }

    switch (searchFor) {
    case 'ingredient': setCallApi(userTypedText);
      break;
    case 'name': setCallApi(userTypedText);
      break;
    case 'firstLetter': setCallApi(userTypedText);
      break;
    default:
    }
  /*   if (searchFor === 'ingredient') setCallApi(userTypedText);
    if (searchFor === 'name') setCallApi(userTypedText);
    if (searchFor === 'firstLetter') setCallApi(userTypedText); */
  };

  // requisição de ingredientes
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${callApi}`);
      const ingredientsData = await response.json();
      setIngredients(ingredientsData.meals);
    })();
  }, [callApi, setIngredients]);

  // requisição por nome
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${callApi}`);
      const nameData = await response.json();
      setNameMeals(nameData.meals);
    })();
  }, [callApi, setNameMeals]);

  // requisição de first letters
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${callApi}`);
      const firstLetterData = await response.json();
      setFirstLetter(firstLetterData.meals);
    })();
  }, [callApi, setFirstLetter]);

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

  return (
    <div>
      <ProfilePicture />
      <h1 data-testid="page-title">Foods</h1>
      <InputText />
      <form onSubmit={ submitRequest }>
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
      </form>
      <p>Tela principal de receitas de comidas</p>
      <BottomMenu />
    </div>
  );
}

export default FoodRecipeScreen;
