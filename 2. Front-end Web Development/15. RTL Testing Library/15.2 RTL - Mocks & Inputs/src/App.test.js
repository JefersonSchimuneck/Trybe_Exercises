import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App.js', () => {

  it('renders App', async () => {
    const { getByText, getByTestId } = render(<App />);
    const instructionMessage = getByText(/Search Digimon/i);
    const searchButton = getByText(/Faça uma pesquisa/i);

    expect(instructionMessage).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    const searchInput = getByTestId('input')
    expect(searchInput).toHaveTextContent('')
  });

  it('receives a value in search input', () => {
    const { getByTestId } = render(<App />);

    const searchInput = getByTestId('input')
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Angemon');
    expect(searchInput).toHaveValue('Angemon');
  });

  it('searches for a digimon', async () => {
    const mockedSearchResult = [{
      name: 'Angemon',
      img: 'https://digimon.shadowsmith.com/img/angemon.jpg',
      level: 'Champion',
    }];

    const { getByTestId, findByText, getByAltText } = render(<App />);

    global.fetch = jest.fn(async () => ({json: async () => mockedSearchResult}));

    const searchInput = getByTestId('input');

    userEvent.type(searchInput, 'Angemon');
    expect(searchInput).toHaveValue('Angemon');

    const buttonSearch = getByTestId('buttonSearch');
    expect(buttonSearch).toBeInTheDocument();
    userEvent.click(buttonSearch);

    await findByText('Angemon');
    expect(getByTestId('digimonName')).toBeInTheDocument();
  });

});