import React from 'react';
import BottomMenu from '../components/BottomMenu';
import InputText from '../components/Header/InputText';
import ProfilePicture from '../components/Header/ProfilePicture';

function ExploreNationalitiesScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Nationalities</h1>
      <ProfilePicture />
      <InputText />
      <BottomMenu />
    </div>
  );
}

export default ExploreNationalitiesScreen;
