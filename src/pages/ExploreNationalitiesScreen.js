import React from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';
import FormHeader from '../components/formHeader';

function ExploreNationalitiesScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Nationalities</h1>
      <Header />
      <FormHeader />
      <BottomMenu />
    </div>
  );
}

export default ExploreNationalitiesScreen;
