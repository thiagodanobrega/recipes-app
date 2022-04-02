import React from 'react';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';

function FoodRecipeScreen() {
  return (
    <div>
      <Header
        renderScreen
        nameScreen="Foods"
      />
      <BottomMenu />
    </div>
  );
}

export default FoodRecipeScreen;
