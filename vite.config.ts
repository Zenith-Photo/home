import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesのリポジトリ名に合わせてbaseを設定
  // リポジトリ名が 'zenith-photo' の場合は '/zenith-photo/' にします
  base: './', 
});