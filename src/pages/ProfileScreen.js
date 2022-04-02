import React from 'react';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';

function ProfileScreen() {
  return (
    <div>
      <Header
        renderScreen={ false }
        nameScreen="Profile"
      />
      <BottomMenu />
    </div>
  );
}

export default ProfileScreen;
