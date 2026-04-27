import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    eager: true,
  },
  outDir: 'dist',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  deps: {
    alwaysBundle: ['@xaa/build-icons'],
  },
  unbundle: true,
  platform: 'browser',
});