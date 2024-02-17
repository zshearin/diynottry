import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx'
import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), mdx()],
  markdown: {
    rehypePlugins: [[addClasses, {
      h1: "text-4xl mb-2 font-normal",
      h2: "text-2xl mb-2 font-normal",
      h3: "text-xl  mb-1 font-normal",
      h4: "text-lg font-normal",
      h5: "font-normal",
    }]]
  },
});