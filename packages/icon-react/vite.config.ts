import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const inputs = [`src/index.ts`];
export default defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			name: 'XaaIconReact',
			fileName: 'index',
			formats: ['es', 'cjs'],
      preserveModules: true,  // 关键！
		},
		rollupOptions: {
       output: {
      manualChunks: undefined  // 让 Rolldown 自动拆分
    },
			external: ['react', 'react-dom', 'react/jsx-runtime'],
      plugins:[dts()]
		},
	},
	plugins: [],
});
