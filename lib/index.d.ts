import type { Linter } from 'eslint';

declare const configs: {
    strict: Linter.Config,
    strictTypeChecked: (tsconfigRoot: string) => Linter.Config;
};

declare const _default: {
    configs: typeof configs;
};

export default _default;
