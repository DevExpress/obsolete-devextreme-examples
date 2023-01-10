import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    commonjsOptions: {
      esmExternals: true 
    },
    lib: {
      entry: resolve(__dirname, 'main.js'),
      name: 'DevExtreme Vue Bundle',
      formats: ['es', 'cjs'],
      fileName: 'devextreme-vue-bundle',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})