# vite-plugin-ts-alias

vite plugin to transform tsconfig paths to vite alias

## Usage

```ts
// vite.config.ts

import tsAlias from 'vite-plugin-ts-alias';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsAlias({
      /**
       * tsconfig name, optional.
       * @default 'tsconfig.json'
       */
      tsConfigName: 'tsconfig.json',
    }),
  ],
});
```

## License
MIT License © 2022 [codpoe](https://github.com/codpoe)
