import { React } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../App.css';
import Loading from '../components/Loading';
import ShareButton from '../components/ShareButton';
import renderIngredientsDrinks from '../helpers/listIngredientsDrinks';
import useFetch from '../hooks/useFetch';
/* import FavoriteWhite from '../images/whiteHeartIcon.svg'; */
// import FavoriteBlack from '../images/whiteHeartIcon.svg';
import ChoosingDrinkFavoriteRecipe from '../components/ChoosingDrinkFavoriteRecipe';
import '../styles/pages/DrinkRecipesDetailScreen.css';

const DrinkRecipesDetailScreen = () => {
  const history = useHistory();
  const { id } = useParams();
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
            alt="{strDrink}"
            height={ 250 }
            width={ 250 }
          />
        </figure>

        <div>
          <h2 data-testid="recipe-title">
            {strDrink}
          </h2>

          {/* <input
            type="image"
            data-testid="favorite-btn"
            alt="Favorite"
            src={ FavoriteWhite }
            height={ 50 }
            width={ 50 }
            // onClick={ () => saveFavoriteRecipe() }
          /> */}
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

      <section>
        <div data-testid="0-recomendation-card">
          <h3 data-testid="recomendation-title">
            RECOMENDA
          </h3>
        </div>
      </section>

      <button
        className="startRecipe"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`/drinks/${idDrink}/in-progress`) }
      >
        {/* {
          verifyRecipe
            ? 'Start Recipe'
            : 'Continue Recipe'
        } */}
        Start Recipe
      </button>
    </main>
  );
};
export default DrinkRecipesDetailScreen;
