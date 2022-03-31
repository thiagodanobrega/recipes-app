import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';

function FoodExploreScreen() {
  const history = useHistory();
  return (
    <div>
      <Header />
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
      >
        Surprise me!
      </button>

      <BottomMenu />
    </div>
  );
}

export default FoodExploreScreen;
