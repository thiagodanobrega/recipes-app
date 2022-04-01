import React, { useHistory } from 'react';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';
import useFetch from '../hooks/useFetch';

function FoodExploreScreen() {
  const history = useHistory();
  const ENDPOINT_RANDOM = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const { data } = useFetch(ENDPOINT_RANDOM);

  const randomRecipeAPI = () => {
    history.push(`/foods/${data.meals[0].idMeal}`);
  };

  return (
    <div>
      <h1 data-testid="page-title">Explore Foods</h1>
      <ProfilePicture />
      <h1 data-testid="page-title">Explore Foods</h1>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>

      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality
      </button>

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ randomRecipeAPI }
      >
        Surprise me!
      </button>

      <BottomMenu />
    </div>
  );
}

export default FoodExploreScreen;
