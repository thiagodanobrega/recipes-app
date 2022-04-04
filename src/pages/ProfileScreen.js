import React from 'react';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';
import useLocalStorage from '../hooks/useLocalStorage';

function ProfileScreen() {
  const [value] = useLocalStorage('user', '');
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
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </main>
      <BottomMenu />
    </>
  );
}

export default ProfileScreen;
