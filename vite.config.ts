import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'HelperMethodsJS',
      fileName: (format) => `helper-methods-js.${format}.js`
    },
  },
})