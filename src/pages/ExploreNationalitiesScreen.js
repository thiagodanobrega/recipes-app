import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header/Header';

function ExploreNationalitiesScreen() {
  return (
    <div>
      <Header
        renderScreen
        nameScreen="Explore Nationalities"
        dataTest="page-title"
      />
      <BottomMenu />
    </div>
  );
}

export default ExploreNationalitiesScreen;
