import React from 'react';
// import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function FoodProgressRecipesScreen() {
  const history = useHistory();
  // const { id } = useParams();
  const id = 52772;
  const endPointFood = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = useFetch(endPointFood);

  const renderIngredients = () => {
    if (data) {
      const arrAllKeysWithValue = data.meals.map((element) => Object.keys(element)
        .filter((key) => element[key] !== '' && element[key] !== null));

      const ingredient = arrAllKeysWithValue[0]
        .filter((element) => element.includes('strIngredient'));

      const measure = arrAllKeysWithValue[0].filter((key) => key.includes('strMeasure'));
      // Percorrendo o array das chaves e acessando elas para obter os valores no array original.
      const ingredientsValues = ingredient.map((key) => data.meals[0][key]);
      const measureValues = measure.map((key) => data.meals[0][key]);

      return (
        ingredientsValues.map((ingredientValue, index) => (
          <label
            data-testid={ `${index}-ingredient-step` }
            htmlFor={ ingredientValue }
            key={ ingredientValue }
          >
            <input
              id={ ingredientValue }
              type="checkbox"
              onClick={ (event) => changeTargetStyle(event) }
            />
            { `${ingredientValue} - ${measureValues[index]}` }
          </label>
        ))
      );
    }
  };

  if (!data) return 'carregando...';
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ data.meals[0].strMealThumb }
        alt="imagem da receita"
      />
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <h1 data-testid="recipe-title">{ data.meals[0].strMeal }</h1>
      <p data-testid="recipe-category">{ data.meals[0].strCategory }</p>
      <h3>Ingredientes:</h3>
      { renderIngredients() }
      <h3>Instruções:</h3>
      <p data-testid="instructions">
        { data.meals[0].strInstructions }
      </p>
      <button
        type="button"
        onClick={ () => history.push('/done-recipes') }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default FoodProgressRecipesScreen;
