import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginScreen() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const disabledButton = () => {
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
    const emailValidation = regexEmail.test(email);
    const minPassword = 6;
    const passwordValidation = password.length > minPassword;
    if (emailValidation && passwordValidation) {
      return false;
    }
    return true;
  };

  const enableButton = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

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
