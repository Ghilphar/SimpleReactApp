import { defineConfig } from 'vite';
import swc from 'vite-plugin-swc';

export default defineConfig({
	plugins: [
		//The swc() will automatically read our .swcrc config	
	],
});
