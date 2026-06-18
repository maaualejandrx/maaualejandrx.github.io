// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // <-- Usamos el plugin oficial de Vite para v4

export default defineConfig({
  site: 'https://maaualejandrx.github.io',
  base: '/LuzDental',
  vite: {
    plugins: [tailwindcss()], // <-- Registramos Tailwind como plugin de Vite
  },
});