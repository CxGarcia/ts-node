/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild')

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outfile: 'lib/index.js',
    bundle: true,
    minify: true,
    platform: 'node',
    sourcemap: true,
    target: 'node14'
  })
  .catch(() => process.exit(1))
