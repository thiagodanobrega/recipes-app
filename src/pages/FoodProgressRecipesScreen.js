import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import renderIngredients from '../helpers/listIngredientsAndMeasures';
import useFetch from '../hooks/useFetch';
import ShareButton from '../components/ShareButton';

function FoodProgressRecipesScreen() {
  // const [enabledButton, setEnabledButton] = useState(true);
  // const history = useHistory();
  const { id } = useParams();
  const endPointFood = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, isLoading } = useFetch(endPointFood);

  const setLocalStorage = (event) => {
    const ingredients = event.target.parentElement.innerText;

    if (localStorage.getItem('inProgressRecipes')) {
      const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes')).meals[id];

      if (getStorage.some((element) => ingredients === element)) {
        const newLocalStorage = getStorage
          .filter((element) => element !== ingredients);

        localStorage.setItem('inProgressRecipes', JSON
          .stringify({ meals: { [id]: newLocalStorage } }));
      } else {
        localStorage.setItem('inProgressRecipes', JSON
          .stringify({ meals: { [id]: [...getStorage, ingredients] } }));
      }
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify(
        { meals: { [id]: [ingredients] } },
      ));
    }
  };

  if (isLoading || !data) {
    return <Loading />;
  }

  const {
    strMeal,
    strMealThumb,
  } = data.meals[0];

  const changeTargetStyle = (event) => {
    if (event.target.checked) {
      event.target.parentElement.style = 'text-decoration-line: line-through';
    } else {
      event.target.parentElement.style = 'text-decoration-line: none';
    }
    setLocalStorage(event, id);
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getStorage) FinishButton(setEnabledButton, getStorage, id, data);
  };

  const doneRecipe = () => {
    const doneFoods = [{
      id,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    }];
    localStorage.setItem('doneRecipes', JSON.stringify(doneFoods));
    history.push('/done-recipes');
  };

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

      <ShareButton />

      <h1 data-testid="recipe-title">{data.meals[0].strMeal}</h1>

      <p data-testid="recipe-category">{data.meals[0].strCategory}</p>

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
        { data.meals[0].strInstructions }
      </p>

      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled={ enabledButton }
        onClick={ doneRecipe }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default FoodProgressRecipesScreen;
