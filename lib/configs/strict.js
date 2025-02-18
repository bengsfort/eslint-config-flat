import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import'; 

import baseConfig from '../base/base.js';
import { typescriptBase } from '../base/typescriptBase.js';

export default tseslint.config(
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  pluginImport.flatConfigs.typescript,
  baseConfig,
  typescriptBase,
);
