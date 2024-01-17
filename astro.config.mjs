import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), mdx()]
});