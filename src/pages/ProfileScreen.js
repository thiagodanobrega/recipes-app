import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';
import useLocalStorage from '../hooks/useLocalStorage';

function ProfileScreen() {
  const history = useHistory();
  const [value] = useLocalStorage('user', '');
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
        <p data-testid="profile-email">{value.email}</p>
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
