import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 追加
  css: {
    preprocessorOptions: {
      scss: {
        addtionalData: `@import "vuetify/styles/settings";`
      }
    }
  }
});
