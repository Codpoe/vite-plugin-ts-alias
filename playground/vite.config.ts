import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsAlias from '..';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsAlias()],
});
