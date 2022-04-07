import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Loading from '../components/Loading';
import ShareButton from '../components/ShareButton';
import renderIngredients from '../helpers/listIngredientsDrinks';
import useFetch from '../hooks/useFetch';
import FavoriteWhite from '../images/whiteHeartIcon.svg';

function FoodProgressRecipesScreen() {
  // const [enabledButton, setEnabledButton] = useState(true);
  // const history = useHistory();
  const { id } = useParams();
  const endPointFood = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, isLoading } = useFetch(endPointFood);

  const setLocalStorage = (event) => {
    const ingredients = event.target.parentElement.innerText;

    if (localStorage.getItem('inProgressRecipes')) {
      const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes')).drinks[id];

      if (getStorage.some((element) => ingredients === element)) {
        const newLocalStorage = getStorage
          .filter((element) => element !== ingredients);

        localStorage.setItem('inProgressRecipes', JSON
          .stringify({ drinks: { [id]: newLocalStorage } }));
      } else {
        localStorage.setItem('inProgressRecipes', JSON
          .stringify({ drinks: { [id]: [...getStorage, ingredients] } }));
      }
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify(
        { drinks: { [id]: [ingredients] } },
      ));
    }
  };

  if (isLoading || !data) {
    return <Loading />;
  }

  const {
    strDrink,
    strDrinkThumb,
  } = data.drinks[0];

  const changeTargetStyle = (event) => {
    if (event.target.checked) {
      event.target.parentElement.style = 'text-decoration-line: line-through';
    } else {
      event.target.parentElement.style = 'text-decoration-line: none';
    }
    setLocalStorage(event);
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
        <input
          type="image"
          data-testid="favorite-btn"
          alt="Favorite"
          src={ FavoriteWhite }
          height={ 26 }
          width={ 26 }
          // onClick={ () => saveFavoriteRecipe() }
        />
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
              >
                <input
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
        className="startRecipe"
        type="button"
        // disabled={ enabledButton }
        onClick={ () => handleButton() }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default FoodProgressRecipesScreen;
