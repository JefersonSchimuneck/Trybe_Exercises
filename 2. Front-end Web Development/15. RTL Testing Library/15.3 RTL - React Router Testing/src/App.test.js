import React from 'react';
import { render } from '@testing-library/react';
import{ createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event';
import App from './App';
sdfs
describe('routes', () => {

  it('navigate from home to contact', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={ history }>
        <App />
      </Router>
    );

    const homeMessage = getByRole('heading', {
      name:'Home',
    })
    expect(homeMessage).toBeInTheDocument();

    const contactLink = getByRole('link', {
      name:'Contact'
    })
    userEvent.click(contactLink);

    const contactMessage = getByRole('heading', {
      name:'Contact',
    })
    expect(contactMessage).toBeInTheDocument();
  })
})
