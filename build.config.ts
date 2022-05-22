import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  externals: ['vite'],
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});
