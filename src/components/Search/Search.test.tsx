import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Search from './index';
import { SearchProps } from '../../types';

const mockSetTracks = vi.fn();
const mockSetSearchTerm = vi.fn();

const mockProps: SearchProps = {
  setTracks: mockSetTracks,
  searchTerm: 'Foo Fighters',
  setSearchTerm: mockSetSearchTerm,
};

describe('Search', () => {
  it('renderiza o campo de entrada e o botão de busca', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <Search {...mockProps} />
      </ChakraProvider>,
    );

    const input = screen.getByPlaceholderText('Search for a track or artist');
    const button = screen.getByTestId('search-button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
