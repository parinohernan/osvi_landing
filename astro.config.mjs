// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://osvi.janus314.com.ar',
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto'
    }
});