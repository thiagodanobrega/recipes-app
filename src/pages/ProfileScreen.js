import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header/Header';

function ProfileScreen() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user')) || '';
  const clearLocalStorage = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <>
      <Header
        renderScreen={ false }
        nameScreen="Profile"
      />
      <main>
        <p data-testid="profile-email">{user.email}</p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Logout
        </button>
      </main>
      <BottomMenu />
    </>
  );
}

export default ProfileScreen;
