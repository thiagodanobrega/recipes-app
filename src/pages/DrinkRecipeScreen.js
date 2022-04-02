import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header/Header';

function DrinksRecipeScreen() {
  return (
    <div>
      <Header
        renderScreen
        nameScreen="Drinks"
        dataTest="page-title"
      />
      <BottomMenu />
    </div>
  );
}

export default DrinksRecipeScreen;
