import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';
import useFetch from '../hooks/useFetch';

function DrinkExploreScreen() {
  const history = useHistory();
  const ENDPOINT_RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const { data } = useFetch(ENDPOINT_RANDOM);

  const randomRecipeAPI = () => {
    history.push(`/drinks/${data.drinks[0].idDrink}`);
  };

  return (
    <div>
      <h1 data-testid="page-title">Explore Drinks</h1>
      <ProfilePicture />
      <h1 data-testid="page-title">Explore Drinks</h1>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient
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

export default DrinkExploreScreen;
