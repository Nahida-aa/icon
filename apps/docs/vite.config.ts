import { paraglideVitePlugin } from '@inlang/paraglide-js';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/paraglide',
			strategy: ['url', 'baseLocale'],
		}),
		nitro({
    rollupConfig: { external: [/^@sentry\//] },
    preset: 'github_pages'
    }),
		tailwindcss(),
		tanstackStart(),
		react(),
		babel({
			presets: [reactCompilerPreset()],
		}),
	],

});

export default config;
