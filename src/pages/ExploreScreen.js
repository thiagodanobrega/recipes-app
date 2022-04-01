import React from 'react';
import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';

function ExploreScreen() {
  return (
    <div>
      <h1 data-testid="page-title">
        Explore

      </h1>

      <ProfilePicture />
      <p>Tela de explorar</p>
      <BottomMenu />
    </div>
  );
}

export default ExploreScreen;
