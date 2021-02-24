import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from './App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Cadastro de estudantes', () => {
  test('renderiza a página inicial ao entrar no app', () => {
    renderWithRouterAndRedux(
      <App />,
      {
        initialState: {
          registerReducer: [],
          loginReducer: {},
        },
      },
    );

    const pageTitle = screen.getByText('Cadastro de Clientes');
    expect(pageTitle).toBeInTheDocument();
  });

  test('faz o login após digitar o email e a senha', () => {
    renderWithRouterAndRedux(
      <App />,
      {
        initialState: {
          registerReducer: [],
          loginReducer: {},
        },
      },
    );

    const loginLink = screen.getByText('Faça seu Login');
    userEvent.click(loginLink);

    const emailInput = screen.getByTestId('input-email');
    const passwordInput = screen.getByTestId('input-password');

    userEvent.type(emailInput, 'xablau@gmail.com');
    userEvent.type(passwordInput, '123456789');

    const loginButton = screen.getByText('Login');
    userEvent.click(loginButton);

    const noClientsText = screen.getByText('Nenhum cliente cadastrado');
    expect(noClientsText).toBeInTheDocument();
  });

  test('o texto "nenhum cliente cadastrado" é exibido na tela de clientes', () => {
    renderWithRouterAndRedux(
      <App />,
      {
        initialEntries: ['/clients'],
        initialState: {
          registerReducer: [],
          loginReducer: {
            email: 'xablau@gmail.com',
            password: '123456789',
          },
        },
      },
    );

    const noClientsText = screen.getByText('Nenhum cliente cadastrado');
    expect(noClientsText).toBeInTheDocument();
  });

  test('tela de Clientes exibe as informações corretamente', () => {
    renderWithRouterAndRedux(
      <App />,
      {
        initialEntries: ['/clients'],
        initialState: {
          registerReducer: [
            { name: 'Yoda', age: 1587, email: 'yoda@starwars.com' },
            { name: 'Vegeta', age: 8000, email: 'malditokakaroto@bdz.com' },
          ],
          loginReducer: {
            email: 'xablau@gmail.com',
            password: '123456789',
          },
        },
      },
    );

    const client1Name = screen.getByText(/Nome: Yoda/);
    expect(client1Name).toBeInTheDocument();

    const client1Age = screen.getByText(/Idade: 1587/);
    expect(client1Age).toBeInTheDocument();

    const client1Email = screen.getByText(/Email: yoda@starwars.com/);
    expect(client1Email).toBeInTheDocument();

    const client2Name = screen.getByText(/Nome: Vegeta/);
    expect(client2Name).toBeInTheDocument();

    const client2Age = screen.getByText(/Idade: 8000/);
    expect(client2Age).toBeInTheDocument();

    const client2Email = screen.getByText(/Email: malditokakaroto@bdz.com/);
    expect(client2Email).toBeInTheDocument();
  });
});
