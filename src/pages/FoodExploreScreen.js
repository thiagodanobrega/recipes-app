import React from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';

function FoodExploreScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Foods</h1>
      <Header />
      <p>Tela de explorar comidas</p>
      <BottomMenu />
    </div>
  );
}

export default FoodExploreScreen;
