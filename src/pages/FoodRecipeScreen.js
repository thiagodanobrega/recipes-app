import React from 'react';
import ProfilePicture from '../components/Header/ProfilePicture';
import BottomMenu from '../components/BottomMenu';
import InputSearchBar from '../components/Header/InputSearchBar';

function FoodRecipeScreen() {
  return (
    <div>
      <ProfilePicture />
      <h1 data-testid="page-title">Foods</h1>
      <InputSearchBar />
      <BottomMenu />
    </div>
  );
}

export default FoodRecipeScreen;
