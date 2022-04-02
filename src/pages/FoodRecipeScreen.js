import React from 'react';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';

function FoodRecipeScreen() {
  return (
    <div>
      <Header
        renderScreen
        nameScreen="Foods"
        dataTest="page-title"
      />
      <BottomMenu />
    </div>
  );
}

export default FoodRecipeScreen;
