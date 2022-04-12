import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header/Header';
import '../styles/pages/ExploreScreen.css';

function ExploreScreen() {
  const history = useHistory();
  return (
    <div>
      <Header
        renderScreen={ false }
        nameScreen="Explore"
      />
      <main className="container-explore">
        <button
          type="button"
          data-testid="explore-foods"
          className="btn-explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>

        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
          className="btn-explore-drinks"
        >
          Explore Drinks
        </button>
      </main>
      <BottomMenu />
    </div>
  );
}

export default ExploreScreen;
