import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../App.css';
import Loading from '../components/Loading';
import ShareButton from '../components/ShareButton';
import getChecked from '../helpers/getCheckedDrinks';
import FinishButtonDrink from '../helpers/FinishButtonDrink';
import renderIngredients from '../helpers/listIngredientsDrinks';
import setLocalStorage from '../helpers/setLocalStorageDrinks';
import useFetch from '../hooks/useFetch';
import ChoosingDrinkFavoriteRecipe from '../components/ChoosingDrinkFavoriteRecipe';

function DrinkProgressRecipesScreen() {
  const [enabledButton, setEnabledButton] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const endPointFood = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, isLoading } = useFetch(endPointFood);

  if (isLoading || !data) {
    return <Loading />;
  }

  const {
    strDrink,
    strAlcoholic,
    strDrinkThumb,
    strCategory,
  } = data.drinks[0];

  const changeTargetStyle = (event) => {
    if (event.target.checked) {
      event.target.parentElement.style = 'text-decoration-line: line-through';
    } else {
      event.target.parentElement.style = 'text-decoration-line: none';
    }
    setLocalStorage(event, id);
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    FinishButtonDrink(setEnabledButton, getStorage, id, data);
  };

  const doneRecipe = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth()).padStart(2, '0');
    const year = date.getFullYear();
    const today = `${day}/${month}/${year}`;
    const doneFoods = {
      id,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
      doneDate: today,
      tags: [],
    };

    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, doneFoods]));
    history.push('/done-recipes');
  };

  return (
    <div>
      <figure>
        <img
          data-testid="recipe-photo"
          src={ strDrinkThumb }
          alt={ strDrink }
          className="col-1-img"
        />
      </figure>
      <div className="col-1-btn">
        <h2 data-testid="recipe-title">{data.drinks[0].strDrink}</h2>
        {/* <input
          type="image"
          data-testid="favorite-btn"
          alt="Favorite"
          src={ FavoriteWhite }
          height={ 26 }
          width={ 26 }
          // onClick={ () => saveFavoriteRecipe() }
        /> */}
        <ChoosingDrinkFavoriteRecipe localDrink={ data.drinks[0] } />
        <ShareButton />
      </div>
      <p data-testid="recipe-category">{data.drinks[0].strCategory}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {
          renderIngredients(data).map((ingredientAndMeasure, index) => (
            <li key={ ingredientAndMeasure }>
              <label
                data-testid={ `${index}-ingredient-step` }
                htmlFor={ ingredientAndMeasure }
                key={ ingredientAndMeasure }
                style={ getChecked(ingredientAndMeasure, id)
                  ? { textDecorationLine: 'line-through' }
                  : { textDecorationLine: 'none' } }
              >
                <input
                  defaultChecked={ getChecked(ingredientAndMeasure, id) }
                  id={ ingredientAndMeasure }
                  type="checkbox"
                  onClick={ (event) => changeTargetStyle(event) }
                />
                {ingredientAndMeasure}
              </label>
            </li>
          ))
        }
      </ul>
      <h3>Instruções:</h3>
      <p data-testid="instructions">
        { data.drinks[0].strInstructions }
      </p>

      <button
        data-testid="finish-recipe-btn"
        className="startRecipe"
        type="button"
        disabled={ enabledButton }
        onClick={ doneRecipe }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default DrinkProgressRecipesScreen;
