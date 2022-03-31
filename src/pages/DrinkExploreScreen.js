import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/header';

function DrinkExploreScreen() {
  const history = useHistory();
  return (
    <div>
      <Header />
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
        onClick={ () => history.push('') }
      >
        Surprise me!
      </button>

      <BottomMenu />
    </div>
  );
}

export default DrinkExploreScreen;
