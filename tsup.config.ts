import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2022',
  // Bundle zod so Vite consumers can exclude this file: dep without a stale zod prebundle.
  noExternal: ['zod'],
})
