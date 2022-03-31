import React from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';

function ExploreScreen() {
  return (
    <div>
      <Header />
      <h1 data-testid="page-title">
        Explore
      </h1>
      <button
        type="button"
        data-testid="explore-foods"
      >
        Explore Foods
      </button>

      <button
        type="button"
        data-testid="explore-drinks"
      >
        Explore Drinks
      </button>

      <BottomMenu />
    </div>
  );
}

export default ExploreScreen;
