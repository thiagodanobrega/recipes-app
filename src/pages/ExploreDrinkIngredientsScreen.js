import React from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';

function ExploreDrinkIngredientsScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Ingredients</h1>
      <Header />
      <p>Tela de explorar bebidas por ingrediente</p>
      <BottomMenu />
    </div>
  );
}

export default ExploreDrinkIngredientsScreen;
