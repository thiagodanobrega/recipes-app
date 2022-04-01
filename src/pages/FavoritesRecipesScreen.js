import React from 'react';
import ProfilePicture from '../components/Header/ProfilePicture';

function FavoritesRecipesScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Favorite Recipes</h1>
      <ProfilePicture />
    </div>
  );
}

export default FavoritesRecipesScreen;
