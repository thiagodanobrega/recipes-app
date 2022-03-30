import React, { useState } from 'react';

function LoginScreen() {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ (event) => setEmail(event.target.value) }
      />
      <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        onChange={ (event) => setPassword(event.target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabledButton() }
        onClick={ enableButton }
      >
        Entar
      </button>
    </div>
  );
}

export default LoginScreen;
