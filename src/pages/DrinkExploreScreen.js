import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header/Header';
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
      <Header
        renderScreen={ false }
        nameScreen="Explore Drinks"
      />
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
