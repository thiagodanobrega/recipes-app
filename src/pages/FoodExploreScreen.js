import React from 'react';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';

function FoodExploreScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Foods</h1>
      <ProfilePicture />
      <p>Tela de explorar comidas</p>
      <BottomMenu />
    </div>
  );
}

export default FoodExploreScreen;
