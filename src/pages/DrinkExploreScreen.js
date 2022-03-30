import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/header';

function DrinkExploreScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Drinks</h1>
      <Header />
      <BottomMenu />
    </div>
  );
}

export default DrinkExploreScreen;
