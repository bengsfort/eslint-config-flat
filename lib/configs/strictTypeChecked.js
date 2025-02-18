import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import'; 

import baseConfig from '../base/base.js';
import { typescriptBase, typescriptTypeCheckedBase } from '../base/typescriptBase.js';

/** @param {string} tsconfigRoot The directory of tsconfig. */
export default function strictTypeCheckedConfig(tsconfigRoot) {
  return tseslint.config(
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    pluginImport.flatConfigs.typescript,
    baseConfig,
    typescriptBase,
    typescriptTypeCheckedBase,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: tsconfigRoot,
        },
      },
    },
  );
}
