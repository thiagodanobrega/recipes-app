import React from 'react';
import BottomMenu from '../components/BottomMenu';
import InputSearchBar from '../components/Header/InputSearchBar';
import ProfilePicture from '../components/Header/ProfilePicture';

function ExploreNationalitiesScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Nationalities</h1>
      <ProfilePicture />
      <InputSearchBar />
      <BottomMenu />
    </div>
  );
}

export default ExploreNationalitiesScreen;
