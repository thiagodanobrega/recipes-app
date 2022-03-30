import React from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';

function ExploreScreen() {
  return (
    <div>
      <h1 data-testid="page-title">
        Explore

      </h1>

      <Header />
      <p>Tela de explorar</p>
      <BottomMenu />
    </div>
  );
}

export default ExploreScreen;
