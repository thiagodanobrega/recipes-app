import { React } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import FavoriteBlack from '../images/whiteHeartIcon.svg';
import '../App.css';
import DrinksRecommended from '../components/DrinksRecommended';
import EmbedVideo from '../components/EmbedVideo';
import Loading from '../components/Loading';
import ShareButton from '../components/ShareButton';
import renderIngredientsFoods from '../helpers/listIngredientsFoods';
import useFetch from '../hooks/useFetch';
import FavoriteWhite from '../images/whiteHeartIcon.svg';

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
            alt={ strMeal }
            className="col-1-img"
          />
        </figure>

        <div className="col-1-btn">
          <h2 data-testid="recipe-title">
            {strMeal}
          </h2>

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

      <section className="gallery">
        <div className="gallery_scroller">
          <DrinksRecommended />
        </div>
      </section>

      <button
        className="startRecipe"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`/foods/${idMeal}/in-progress`) }
      >
        Start Recipe
      </button>
    </main>
  );
};
export default FoodRecipesDetailScreen;
