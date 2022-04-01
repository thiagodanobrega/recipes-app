import React from 'react';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';

function DrinkExploreScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Drinks</h1>
      <ProfilePicture />
      <BottomMenu />
    </div>
  );
}

export default DrinkExploreScreen;
