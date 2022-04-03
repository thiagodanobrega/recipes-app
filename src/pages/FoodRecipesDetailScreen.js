import React, {
  useEffect,
  useState,
} from 'react';
// import {
//   Player,
// } from 'video-react';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import Share from '../images/shareIcon.svg';
import Favorite from '../images/whiteHeartIcon.svg';
import '../styles/pages/FoodRecipesDetailScreen.css';

const FoodRecipesDetailScreen = () => {
  const [completeList, setCompleteList] = useState([]);
  const RECIPE_ID = '52772';
  const RECIPES_BY_ID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${RECIPE_ID}`;
  const {
    data,
    isLoading,
  } = useFetch(RECIPES_BY_ID);
  const {
    meals,
  } = data || {
    meals: [],
  };
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
  } = meals[0] || {};
  const listIngredientsAndMeasures = (object) => {
    const getallIngredients = Object.entries(object)
      .filter(([key, value]) => (key.includes('strIngredient') && value))
      .map((array) => array[1]);
    const getAllMeasures = Object.entries(object)
      .filter(([key, value]) => (key.includes('strMeasure') && value))
      .map((array) => array[1]);
    const getAllListRecipe = [];
    getallIngredients.forEach((item, index) => (getAllListRecipe.push(
      `- ${item} - ${getAllMeasures[index]}`,
    )));
    setCompleteList(getAllListRecipe);
  };
  useEffect(() => {
    if (data) {
      listIngredientsAndMeasures(data.meals[0]);
    }
  }, [data]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main
      className="mainFoodRecipesDetailScreen"
    >
      <section
        className="mainFoodRecipesDetailScreen"
      >
        <figure
          className="mainFoodRecipesDetailScreen"
        >
          <img
            className="mainFoodRecipesDetailScreen"
            data-testid="recipe-photo"
            src={ strMealThumb }
            alt="{strMeal}"
            height={ 250 }
            width={ 250 }
          />
        </figure>

        <div
          className="mainFoodRecipesDetailScreen"
        >
          <h2
            className="mainFoodRecipesDetailScreen"
            data-testid="recipe-title"
          >
            {strMeal}
          </h2>

          <input
            className="mainFoodRecipesDetailScreen"
            type="image"
            data-testid="share-btn"
            alt="Favorite"
            src={ Favorite }
            height={ 50 }
            width={ 50 }
          />

          <input
            className="mainFoodRecipesDetailScreen"
            type="image"
            data-testid="favorite-btn"
            alt="Share"
            src={ Share }
            height={ 50 }
            width={ 50 }
          />
        </div>

        <p
          className="mainFoodRecipesDetailScreen"
          data-testid="recipe-category"
        >
          {strCategory}
        </p>
      </section>

      <section
        className="mainFoodRecipesDetailScreen"
      >
        <h2
          className="mainFoodRecipesDetailScreen"
        >
          Ingredientes
        </h2>
        <ul
          className="mainFoodRecipesDetailScreen"
        >
          {completeList.map((item, index) => (
            <li
              className="mainFoodRecipesDetailScreen"
              key={ index }
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        className="mainFoodRecipesDetailScreen"
      >
        <h2
          className="mainFoodRecipesDetailScreen"
        >
          instructions

        </h2>
        <p
          className="mainFoodRecipesDetailScreen"
          data-testid="instructions"
        >
          {strInstructions}
        </p>
      </section>

      {/* <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      /> */}

      <button
        className="mainFoodRecipesDetailScreen"
        type="button"
        data-testid="start-recipe-btn"
      >
        Start Recipe
      </button>
    </main>
  );
};
export default FoodRecipesDetailScreen;
