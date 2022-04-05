import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import FavoriteWhite from '../images/whiteHeartIcon.svg';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import Share from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function FoodProgressRecipesScreen() {
  // const [enabledButton, setEnabledButton] = useState(true);
  // const history = useHistory();
  const { id } = useParams();
  const endPointFood = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, isLoading } = useFetch(endPointFood);
  const location = useLocation();
  const copyToClipboard = () => {
    copy(location.pathname);
    global.alert('Link copied!');
  };

  // const setLocalStorage = (event) => {
  //   const ingredients = event.target.parentElement.innerText;

  //   if (localStorage.getItem('inProgressRecipes')) {
  //     const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes')).meals[id];

  //     if (getStorage.some((element) => ingredients === element)) {
  //       const newLocalStorage = getStorage
  //         .filter((element) => element !== ingredients);

  //       localStorage.setItem('inProgressRecipes', JSON
  //         .stringify({ meals: { [id]: newLocalStorage } }));
  //     } else {
  //       localStorage.setItem('inProgressRecipes', JSON
  //         .stringify({ meals: { [id]: [...getStorage, ingredients] } }));
  //     }
  //   } else {
  //     localStorage.setItem('inProgressRecipes', JSON.stringify(
  //       { meals: { [id]: [ingredients] } },
  //     ));
  //   }
  // };

  if (isLoading || !data) {
    return <Loading />;
  }

  const {
    // idMeal,
    strMeal,
    strMealThumb,
    // strCategory,
    // strInstructions,
    // strArea,
    // strDrinkAlternate,
    // strYoutube,
  } = data.meals[0];

  const changeTargetStyle = (event) => {
    if (event.target.checked) {
      event.target.parentElement.style = 'text-decoration-line: line-through';
    } else {
      event.target.parentElement.style = 'text-decoration-line: none';
    }
    setLocalStorage(event);
  };

  const renderIngredients = () => {
    const arrIngredientMeasure = [];
    // console.log(arrIngredientMeasure);
    const arrAllKeysWithValue = data.meals.map((element) => Object.keys(element)
      .filter((key) => element[key] !== '' && element[key] !== null));

    const ingredient = arrAllKeysWithValue[0]
      .filter((element) => element.includes('strIngredient'));

    const measure = arrAllKeysWithValue[0].filter((key) => key
      .includes('strMeasure'));

    const ingredientsValues = ingredient.map((key) => data.meals[0][key]);
    const measureValues = measure.map((key) => data.meals[0][key]);

    ingredientsValues.map((ingredientValue, index) => (arrIngredientMeasure
      .push(`${ingredientValue} - ${measureValues[index]}`)
    ));
    // console.log(arrIngredientMeasure);
    return (arrIngredientMeasure);
  };

  // console.log(renderIngredients());

  return (
    <div>
      <figure>
        <img
          data-testid="recipe-photo"
          src={ strMealThumb }
          alt={ strMeal }
          height={ 250 }
          width={ 250 }
        />
      </figure>

      <button type="button" data-testid="favorite-btn">Favoritar</button>

      <input
        type="image"
        data-testid="share-btn"
        alt="Share"
        src={ Share }
        height={ 50 }
        width={ 50 }
        onClick={ () => copyToClipboard() }
      />

      <h1 data-testid="recipe-title">{data.meals[0].strMeal}</h1>

      <p data-testid="recipe-category">{data.meals[0].strCategory}</p>

      <h3>Ingredientes:</h3>

      <ul>
        {
          renderIngredients().map((ingredientAndMeasure, index) => (
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
        { data.meals[0].strInstructions }
      </p>

      <button
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
