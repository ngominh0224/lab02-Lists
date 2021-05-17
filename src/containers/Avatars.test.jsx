import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarsContainer from './AvatarsContainers';
import { MemoryRouter } from 'react-router-dom';

describe('Avatar Container Test', () => {
  it('should render a list of avatar characters', async () => {
    render(
      <MemoryRouter>
        <AvatarsContainer />
      </MemoryRouter>
    );

    screen.getByText('Woops!');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
