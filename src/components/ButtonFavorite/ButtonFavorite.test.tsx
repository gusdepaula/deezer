import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import ButtonFavorite from './index';
import { Track } from '../../types';

const mockTrack: Track = {
  id: 1,
  title: 'Test Track',
  artist: { name: 'Test Artist' },
  album: { cover_medium: 'test-cover.jpg' },
  duration: 300,
  preview: 'test-preview.mp3',
  link: 'test-link',
};

const mockFavorites: Track[] = [];

describe('ButtonFavorite', () => {
  it('renderiza o botão com um ícone de coração preto quando não é favorito', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <ButtonFavorite track={mockTrack} favorites={mockFavorites} setFavorites={vi.fn()} />
      </ChakraProvider>,
    );
    const heartIcon = screen.getByRole('button').querySelector('svg');
    expect(heartIcon).toHaveStyle('fill: black');
  });

  it('renderiza o botão com um ícone de coração vermelho quando é favorito', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <ButtonFavorite track={mockTrack} favorites={[mockTrack]} setFavorites={vi.fn()} />
      </ChakraProvider>,
    );
    const heartIcon = screen.getByRole('button').querySelector('svg');
    expect(heartIcon).toHaveStyle('fill: red');
  });

  it('chama setFavorites com os favoritos atualizados quando clicado', () => {
    const setFavorites = vi.fn();
    render(
      <ChakraProvider value={defaultSystem}>
        <ButtonFavorite track={mockTrack} favorites={mockFavorites} setFavorites={setFavorites} />
      </ChakraProvider>,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setFavorites).toHaveBeenCalledWith([mockTrack]);
  });
});
