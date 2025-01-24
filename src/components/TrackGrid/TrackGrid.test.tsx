import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import TrackGrid from './index';
import { Track } from '../../types';

const mockTracks: Track[] = [
  {
    id: 1,
    title: 'Track 1',
    artist: { name: 'Artist 1' },
    album: { cover_medium: 'cover1.jpg' },
    duration: 300,
    preview: 'preview1.mp3',
    link: 'link1',
  },
  {
    id: 2,
    title: 'Track 2',
    artist: { name: 'Artist 2' },
    album: { cover_medium: 'cover2.jpg' },
    duration: 200,
    preview: 'preview2.mp3',
    link: 'link2',
  },
];

const mockSetFavorites = vi.fn();

describe('TrackGrid', () => {
  it('renderiza a lista de faixas corretamente', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <TrackGrid tracks={mockTracks} favorites={mockTracks} setFavorites={mockSetFavorites} />
      </ChakraProvider>,
    );

    const trackTitles = screen.getAllByText(/Track \d/);
    expect(trackTitles).toHaveLength(2);
    expect(trackTitles[0]).toHaveTextContent('Track 1');
    expect(trackTitles[1]).toHaveTextContent('Track 2');
  });

  it('renderiza a mensagem "No favorite tracks found." quando não há faixas', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <TrackGrid tracks={[]} favorites={[]} setFavorites={mockSetFavorites} />
      </ChakraProvider>,
    );

    const noTracksMessage = screen.getByTestId('no-favorite');
    expect(noTracksMessage).toBeInTheDocument();
  });
});
