import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './myContext';

function Provider({ children }) {
  const INITIAL_STATE = { nome: 'Xablau', idade: 100 };
  const [state, setState] = useState(INITIAL_STATE);

  const contex = {
    state,
    setState,
  };

  return (
    <MyContext.Provider value={ contex }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
