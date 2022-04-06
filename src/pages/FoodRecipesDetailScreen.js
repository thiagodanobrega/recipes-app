import { React } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import FavoriteBlack from '../images/whiteHeartIcon.svg';
import '../App.css';
import EmbedVideo from '../components/EmbedVideo';
import Loading from '../components/Loading';
import ShareButton from '../components/ShareButton';
import renderIngredientsFoods from '../helpers/listIngredientsFoods';
import useFetch from '../hooks/useFetch';
import ChoosingFavoriteRecipe from '../components/ChoosingFavoriteRecipe';

const FoodRecipesDetailScreen = () => {
  const history = useHistory();
  const { id } = useParams();
  const endPointFood = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, isLoading } = useFetch(endPointFood);

  if (isLoading || !data) {
    return <Loading />;
  }

  const {
    idMeal,
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    strYoutube,
  } = data.meals[0];

  const embedId = strYoutube.substring(strYoutube.indexOf('=') + 1, strYoutube.length);

  return (
    <main>
      <section>
        <figure>
          <img
            data-testid="recipe-photo"
            src={ strMealThumb }
            alt="{strMeal}"
            height={ 250 }
            width={ 250 }
          />
        </figure>

        <div>
          <h2 data-testid="recipe-title">
            {strMeal}
          </h2>
          <ChoosingFavoriteRecipe localMeal={ localMeal } />
          {/*  <input
            type="image"
            data-testid="favorite-btn"
            alt="Favorite"
            src={ FavoriteWhite }
            height={ 50 }
            width={ 50 }
            onClick={ () => saveFavoriteRecipe() }
          /> */}

          <ShareButton />
        </div>

        <p data-testid="recipe-category">
          {strCategory}
        </p>
      </section>

      <section>
        <h2> Ingredients </h2>

        <ul>
          {
            renderIngredientsFoods(data).map((item, index) => (
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

      <section className="EmbedVideo">
        <h2> Video </h2>
        <EmbedVideo embedId={ embedId } />
      </section>

      <section>
        <h2> Recommended </h2>
        <div data-testid="0-recomendation-card">
          <h3 data-testid="recomendation-title">
            RECOMENDA
          </h3>
        </div>
      </section>

      <button
        id="startRecipe"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`/foods/${idMeal}/in-progress`) }
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
export default FoodRecipesDetailScreen;
