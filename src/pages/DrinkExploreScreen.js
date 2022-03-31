import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/header';

function DrinkExploreScreen() {
  return (
    <div>
      <Header />
      <h1 data-testid="page-title">Explore Drinks</h1>
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
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

export default DrinkExploreScreen;
