import { React, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../App.css';
import ChoosingDrinkFavoriteRecipe from '../components/ChoosingDrinkFavoriteRecipe';
import FoodsRecommended from '../components/FoodsRecommended';
import Loading from '../components/Loading';
import ShareButton from '../components/ShareButton';
import renderIngredientsDrinks from '../helpers/listIngredientsDrinks';
import useFetch from '../hooks/useFetch';

const DrinkRecipesDetailScreen = () => {
  const history = useHistory();
  const { id } = useParams();
  const [isStartedRecipe, setIsStartedRecipe] = useState(false);

  const verifyLocalStorage = () => {
    const doneRecipesInLocalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipesInLocalStorage) {
      const isInStorage = doneRecipesInLocalStorage
        .map((doneRecipe) => (doneRecipe.id === id
          ? setIsStartedRecipe(true)
          : setIsStartedRecipe(false)
        ));
      return isInStorage;
    }
  };

  useEffect(() => {
    verifyLocalStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const endPointDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, isLoading } = useFetch(endPointDrink);

  if (isLoading || !data) {
    return <Loading />;
  }

  const {
    idDrink,
    strDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
  } = data.drinks[0];

  return (
    <main>
      <section>
        <figure>
          <img
            data-testid="recipe-photo"
            src={ strDrinkThumb }
            alt={ strDrink }
            className="col-1-img"
          />
        </figure>

        <div className="col-1-btn">
          <h2 data-testid="recipe-title">
            {strDrink}
          </h2>
          <ChoosingDrinkFavoriteRecipe localDrink={ data.drinks[0] } />
          <ShareButton />
        </div>

        <p data-testid="recipe-category">
          {strAlcoholic}
        </p>
      </section>

      <section>
        <h2> Ingredients </h2>

        <ul>
          {
            renderIngredientsDrinks(data).map((item, index) => (
              <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {item}
              </li>
            ))
          }
        </ul>
      </section>

      <section>
        <h2> Instructions </h2>
        <p data-testid="instructions">
          {strInstructions}
        </p>
      </section>

      <section className="gallery">
        <div className="gallery_scroller">
          <FoodsRecommended />
        </div>
      </section>

      {
        !isStartedRecipe
          ? (
            <button
              className="startRecipe"
              type="button"
              data-testid="start-recipe-btn"
              onClick={ () => history.push(`/drinks/${idDrink}/in-progress`) }
            >
              Start Recipe
            </button>
          )
          : ''
      }

    </main>
  );
};
export default DrinkRecipesDetailScreen;
