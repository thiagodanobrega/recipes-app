import React from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';

function FoodExploreScreen() {
  return (
    <div>
      <Header />
      <h1 data-testid="page-title">Explore Foods</h1>
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>

      <button
        type="button"
        data-testid="explore-by-nationality"
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
