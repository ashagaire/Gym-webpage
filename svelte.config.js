import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import node from '@sveltejs/adapter-node';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: node()
  },
  preprocess: vitePreprocess()
};
export default config;