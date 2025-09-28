import type { Linter } from 'eslint';
import type { ConfigArray, InfiniteDepthConfigWithExtends } from 'typescript-eslint';

declare const configs: {
    strict: Linter.Config;
    strictTypeChecked: (tsconfigRoot: string) => Linter.Config;
    disableTypeChecked: Linter.Config;
};

declare const _default: {
    configs: typeof configs;
    defineConfig: (...configs: InfiniteDepthConfigWithExtends[]) => ConfigArray;
};

export default _default;
