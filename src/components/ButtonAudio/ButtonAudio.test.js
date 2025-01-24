import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import ButtonAudio from './index';
const mockTrack = {
    id: 1,
    title: 'Faixa de Teste',
    artist: { name: 'Artista de Teste' },
    album: { cover_medium: 'capa-teste.jpg' },
    duration: 300,
    preview: 'previa-teste.mp3',
    link: 'link-teste',
};
describe('ButtonAudio', () => {
    it('renderiza o botão de play inicialmente', () => {
        render(_jsx(ChakraProvider, { value: defaultSystem, children: _jsx(ButtonAudio, { track: mockTrack }) }));
        const playIcon = screen.getByRole('button').querySelector('svg');
        expect(playIcon).toBeInTheDocument();
        expect(playIcon).toHaveAttribute('viewBox', '0 0 448 512');
    });
    it('alterna para o ícone de pause quando clicado', () => {
        render(_jsx(ChakraProvider, { value: defaultSystem, children: _jsx(ButtonAudio, { track: mockTrack }) }));
        const button = screen.getByRole('button');
        fireEvent.click(button);
        const pauseIcon = screen.getByRole('button').querySelector('svg');
        expect(pauseIcon).toBeInTheDocument();
        expect(pauseIcon).toHaveAttribute('viewBox', '0 0 448 512');
    });
    it('alterna de volta para o ícone de play quando clicado novamente', () => {
        render(_jsx(ChakraProvider, { value: defaultSystem, children: _jsx(ButtonAudio, { track: mockTrack }) }));
        const button = screen.getByRole('button');
        fireEvent.click(button); // Play
        fireEvent.click(button); // Pause
        const playIcon = screen.getByRole('button').querySelector('svg');
        expect(playIcon).toBeInTheDocument();
        expect(playIcon).toHaveAttribute('viewBox', '0 0 448 512');
    });
});
