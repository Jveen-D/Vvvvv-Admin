import { defineConfig } from 'vite'
const { resolve } = require('path')
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src')
      // 'vue': 'vue/dist/vue.esm-bundler.js',//配置template
    }
  },
  plugins: [vue()]
})
