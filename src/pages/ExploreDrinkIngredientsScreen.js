import React from 'react';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';

function ExploreDrinkIngredientsScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Ingredients</h1>
      <ProfilePicture />
      <p>Tela de explorar bebidas por ingrediente</p>
      <BottomMenu />
    </div>
  );
}

export default ExploreDrinkIngredientsScreen;
