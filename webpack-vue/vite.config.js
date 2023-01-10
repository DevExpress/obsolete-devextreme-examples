import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    commonjsOptions: {
      esmExternals: true 
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'main.js'),
      name: 'DevExtreme Vue Bundle',
      formats: ['es', 'cjs'],
      // the proper extensions will be added
      fileName: 'devextreme-vue-bundle',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})