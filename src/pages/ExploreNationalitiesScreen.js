import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header/Header';

function ExploreNationalitiesScreen() {
  return (
    <div>
      <Header
        renderScreen
        nameScreen="Explore Nationalities"
      />
      <BottomMenu />
    </div>
  );
}

export default ExploreNationalitiesScreen;
