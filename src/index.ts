import path from 'upath';
import { Plugin } from 'vite';
import { loadTsConfig } from 'load-tsconfig';

export interface TsAliasConfig {
  /**
   * tsconfig name
   * @default 'tsconfig.json'
   */
  tsConfigName?: string;
}

interface CompilerOptions {
  baseUrl?: string;
  paths?: Record<string, string[]>;
}

export function tsAlias({
  tsConfigName = 'tsconfig.json',
}: TsAliasConfig = {}): Plugin {
  return {
    name: 'ts-alias',
    enforce: 'pre',
    config(viteConfig) {
      const root = path.normalize(
        viteConfig.root ? path.resolve(viteConfig.root) : process.cwd()
      );

      const loaded = loadTsConfig(root, tsConfigName);

      if (!loaded) {
        return;
      }

      const { baseUrl, paths } = (loaded.data.compilerOptions ||
        {}) as CompilerOptions;

      if (!baseUrl || !paths) {
        return;
      }

      const alias = Object.entries(paths).reduce<Record<string, string>>(
        (res, [key, value]) => {
          if (value[0]) {
            const find = key.replace('/*', '');
            const replacement = path.resolve(
              baseUrl,
              value[0].replace('/*', '').replace('*', '')
            );

            res[find] = replacement;
          }

          return res;
        },
        {}
      );

      return {
        resolve: {
          alias,
        },
      };
    },
  };
}

export default tsAlias;
