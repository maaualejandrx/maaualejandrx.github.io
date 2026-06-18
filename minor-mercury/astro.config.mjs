// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <-- Volvemos a importar Tailwind

// https://astro.build/config
export default defineConfig({
  site: 'https://maaualejandrx.github.io', // <-- Tu dominio de GitHub Pages
  base: '/LuzDental',                     // <-- La subruta de tu repositorio para que cargue el CSS
  integrations: [tailwind()],             // <-- Activamos Tailwind en el proceso de compilación
});