import React from 'react';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';
import InputSearchBar from '../components/Header/InputSearchBar';

function DrinksRecipeScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Drinks</h1>
      <InputSearchBar />
      <ProfilePicture />
      <BottomMenu />
    </div>
  );
}

export default DrinksRecipeScreen;
