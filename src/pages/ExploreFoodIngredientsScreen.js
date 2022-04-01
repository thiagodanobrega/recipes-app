import React from 'react';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';

function ExploreFoodIngredientsScreen() {
  return (
    <div>

      <h1 data-testid="page-title">Explore Ingredients</h1>

      <ProfilePicture />
      <p>Tela de explorar comidas por ingrediente</p>
      <BottomMenu />
    </div>
  );
}

export default ExploreFoodIngredientsScreen;
