import React from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';

function ExploreFoodIngredientsScreen() {
  return (
    <div>

      <h1 data-testid="page-title">Explore Ingredients</h1>

      <Header />
      <p>Tela de explorar comidas por ingrediente</p>
      <BottomMenu />
    </div>
  );
}

export default ExploreFoodIngredientsScreen;
