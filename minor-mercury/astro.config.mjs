import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://maaualejandrx.github.io',
  base: '/LuzDental', // <-- ESTA LÍNEA ES CRUCIAL
  integrations: [tailwind()],
});