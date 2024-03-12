import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx'
import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), mdx()],
  markdown: {
    rehypePlugins: [[addClasses, {
      h1: "text-4xl mb-2 font-normal text-left",
      h2: "text-2xl mb-2 font-normal text-left",
      h3: "text-xl  mb-1 font-normal text-left",
      h4: "text-lg font-normal text-left",
      h5: "font-normal text-left",
    }]]
  },
});