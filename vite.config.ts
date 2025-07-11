import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	preview: {
		allowedHosts: ["xn--80adsi2a0f.xn--b1agjiduva.xn--p1ai"],
	}
});
