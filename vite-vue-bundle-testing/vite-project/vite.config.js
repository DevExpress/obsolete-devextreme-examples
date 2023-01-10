import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
//   build: {

//     /** If you set esmExternals to true, this plugins assumes that 
//       all external dependencies are ES modules */
 
//       commonjsOptions: {
//         esmExternals: true 
//      },
//  }
})
