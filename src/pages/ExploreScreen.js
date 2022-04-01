import React from 'react';
import { useHistory } from 'react-router-dom';

import BottomMenu from '../components/BottomMenu';
import ProfilePicture from '../components/Header/ProfilePicture';

function ExploreScreen() {
  const history = useHistory();
  return (
    <div>
      <ProfilePicture />
      <h1 data-testid="page-title">
        Explore
      </h1>
      <button
        type="button"
        data-testid="explore-foods"
        onClick={ () => history.push('/explore/foods') }
      >
        Explore Foods
      </button>

      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>
      <BottomMenu />
    </div>
  );
}

export default ExploreScreen;
