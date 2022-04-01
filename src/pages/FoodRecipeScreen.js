import React, { useContext, useState, useEffect } from 'react';
import ProfilePicture from '../components/Header/ProfilePicture';
import BottomMenu from '../components/BottomMenu';
import InputText from '../components/Header/InputText';
import contextFoodRecipes from '../context/contextFoodRecipe/contextFoodRecipe';
// import Loading from '../components/loading';

function FoodRecipeScreen() {
// contextFood
  const {
    // setCategories,
    // setFirstLetter,
    // setUserTypedText,
    setIngredients,
    // setNameMeals,
    // setNationalities
  } = useContext(contextFoodRecipes);
  const { userTypedText } = useContext(contextFoodRecipes);
  // estado local do usuario
  const [searchIngredient, setSearchIngredient] = useState('');
  const [searchFirstLetter, setSearchFirstLetter] = useState('');
  const [searchName, setSearchName] = useState('a');
  const [callApi, setCallApi] = useState('');
  //--------------------------------------------------------

  const submitRequest = (e) => {
    e.preventDefault();
    const verifyLetter = [...userTypedText];
    if (verifyLetter.length !== 1 && searchFirstLetter.length !== 0) {
      return global.alert('Your search must have only 1 (one) character');
    }
    const ingredient = [userTypedText];
    console.log('loguei e escrevi', ingredient);
    setCallApi(ingredient);
    console.log(userTypedText, searchIngredient, searchName);
  };

  // requisição de ingredientes
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${callApi}`);
      const dataIngredients = await response.json();
      setIngredients(dataIngredients.meals);
    })();

    console.log('fiz chamada dos ingredients');
  }, [callApi, setIngredients]);

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

  // requisição de first letters
  /*   useEffect(() => {
    (async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      const firstLetterData = await response.json();
      setFirstLetter(firstLetterData.meals);
    })();
  }, [setFirstLetter]); */

  // requisição por nome
  /*  useEffect(() => {
    (async () => {
      const response = await fetch(`www.themealdb
      .com/api/json/v1/1/search.php?s=Arrabiata`);
      const nameData = await response.json();
      console.log('loguei Name', nameData);
      setNameMeals(nameData.meals);
    })();
  }, [setNameMeals]); */

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
            onClick={ ({ target: { value } }) => setSearchIngredient(value) }
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
            onClick={ ({ target: { value } }) => setSearchFirstLetter(value) }
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
            onClick={ ({ target: { value } }) => setSearchName(value) }
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
