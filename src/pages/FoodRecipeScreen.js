import React, { useContext, useState } from 'react';
import ProfilePicture from '../components/Header/ProfilePicture';
import BottomMenu from '../components/BottomMenu';
import InputText from '../components/Header/InputText';
import contextFoodRecipes from '../context/contextFoodRecipe/contextFoodRecipe';
// import Loading from '../components/loading';

function FoodRecipeScreen() {
  const { setUserChoiceTypeSearch } = useContext(contextFoodRecipes);
  const [userChosetUserChoiceceOnclick, setUserChoiceOnclick] = useState('');

  // requisição de ingredientes
  useEffect(() => {
    (async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const dataIngredients = await response.json();
      setIngredients(dataIngredients.meals);
    })();
  }, []);

  // requisição de categorias
  useEffect(() => {
    (async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const dataCategories = await response.json();
      setCategories(dataCategories.meals);
    })();
  }, []);

  // requisição de nationalities
  useEffect(() => {
    (async () => {
      const response = await fetch(' https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const nationality = await response.json();
      setNationalities(nationality.meals);
    })();
  }, []);

  // requisição de first letters
  useEffect(() => {
    (async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      const firstLetterData = await response.json();
      setFirstLetter(firstLetterData.meals);
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

  const submitRadioValue = (e) => {
    e.preventDefault();
    setUserChoiceTypeSearch(userChosetUserChoiceceOnclick);
  };

  return (
    <div>
      <ProfilePicture />
      <h1 data-testid="page-title">Foods</h1>
      <InputText />
      <form onSubmit={ submitRadioValue }>
        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
            name="search"
            value="ingredient"
            onClick={ ({ target: { value } }) => setUserChoiceOnclick(value) }
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
            onClick={ ({ target: { value } }) => setUserChoiceOnclick(value) }
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
            onClick={ ({ target: { value } }) => setUserChoiceOnclick(value) }
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
