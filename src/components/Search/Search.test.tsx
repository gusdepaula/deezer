import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Search from './index';

const mockOnSearch = vi.fn();

describe('Search', () => {
  it('renderiza o campo de entrada e o botão de busca', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <Search setTracks={mockOnSearch} searchTerm={mockOnSearch} setSearchTerm={mockOnSearch} />
      </ChakraProvider>,
    );

    const input = screen.getByPlaceholderText('Search for a track or artist');
    const button = screen.getByTestId('search-button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
