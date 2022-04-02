import React from 'react';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';
import InputSearchBar from '../components/Header/InputSearchBar';

function DrinksRecipeScreen() {
  return (
    <div>
      <ProfilePicture />
      <h1 data-testid="page-title">Drinks</h1>
      <InputSearchBar />
      <BottomMenu />
    </div>
  );
}

export default DrinksRecipeScreen;
