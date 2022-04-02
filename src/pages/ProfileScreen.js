import React from 'react';
import ProfilePicture from '../components/Header/ProfilePicture';
import BottomMenu from '../components/BottomMenu';

function ProfileScreen() {
  return (
    <div>
      <h1 data-testid="page-title">Profile</h1>
      <ProfilePicture />
      <h1>Tela de Perfil</h1>
      <BottomMenu />
    </div>
  );
}

export default ProfileScreen;
