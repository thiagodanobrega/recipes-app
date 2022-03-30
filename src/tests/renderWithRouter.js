import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// Renderizar QUALQUER componente
function renderWithRouter(componentToRender) {
  const customHistory = createMemoryHistory();

  const returnRender = render(
    <Router history={ customHistory }>
      {componentToRender}
    </Router>,
  );
  return { history: customHistory, ...returnRender };
}
export default renderWithRouter;
