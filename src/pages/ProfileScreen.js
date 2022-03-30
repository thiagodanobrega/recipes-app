import React from 'react';
import Header from '../components/header';
import BottomMenu from '../components/BottomMenu';

function ProfileScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Profile</h1>
      <Header />
      <h1>Tela de Perfil</h1>
      <BottomMenu />
    </div>
  );
}

export default ProfileScreen;
