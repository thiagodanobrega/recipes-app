import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header/Header';

function ExploreDrinkIngredientsScreen() {
  return (
    <div>
      <Header
        renderScreen={ false }
        nameScreen="Explore Ingredients"
      />
      <BottomMenu />
    </div>
  );
}

export default ExploreDrinkIngredientsScreen;
