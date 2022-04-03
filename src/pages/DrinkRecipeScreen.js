import React from 'react';
import BottomMenu from '../components/BottomMenu';
import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header/Header';

function DrinksRecipeScreen() {
  return (
    <div>
      <Header
        renderScreen
        nameScreen="Drinks"
      />
      <CategoriesButtons />
      <BottomMenu />
    </div>
  );
}

export default DrinksRecipeScreen;
