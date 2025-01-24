import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://api.deezer.com', // URL da API que você quer acessar
                changeOrigin: true, // Troca o origin para evitar problemas com CORS
                rewrite: path => path.replace(/^\/api/, ''), // Remove o prefixo '/api'
            },
        },
    },
});
