// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://osvi.janus314.com.ar',
    compressHTML: true,
    server: {
        allowedHosts: ['osvi.janus314.com.ar', 'localhost', '127.0.0.1']
    },
    build: {
        inlineStylesheets: 'auto'
    },
    vite: {
        server: {
            allowedHosts: true
        }
    }
});
