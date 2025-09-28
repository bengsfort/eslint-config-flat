import tseslint from 'typescript-eslint';
import strictConfig from './configs/strict.js';
import strictTypeCheckedConfig from './configs/strictTypeChecked.js';

const configs = {
  strict: strictConfig,
  strictTypeChecked: strictTypeCheckedConfig,
  disableTypeChecked: tseslint.configs.disableTypeChecked,
};

export default {
  configs,
  defineConfig: tseslint.config,
};
