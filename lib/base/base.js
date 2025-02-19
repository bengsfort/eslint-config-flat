import stylistic from '@stylistic/eslint-plugin';
import pluginPromise from 'eslint-plugin-promise';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginImport from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginPromise.configs['flat/recommended'],
  pluginImport.flatConfigs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // General
      // Code Cleanliness
      curly: ['error', 'all'],
      '@stylistic/semi': ['error', 'always'],
      eqeqeq: ['error', 'always'],
      'max-len': 'off',
      'no-console': 'warn', // Warning to encourage using scoped loggers.
      'no-plusplus': 'off',
      'no-unused-vars': 'off', // Disabled as it is handled by typescript-eslint
      'no-underscore-dangle': 'off',
      'class-methods-use-this': 'off', // Not a fan of forcing all methods to static.
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'block-like', next: 'block-like' },
      ],
      
      // Potential bugs
      'no-prototype-builtins': 'off',
      'constructor-super': 'error',
      'no-this-before-super': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['src/*'],
              message: 'You should import using alias or with relative path',
            },
          ],
        },
      ],
      'no-extra-boolean-cast': [
        'error',
        {
          enforceForLogicalOperands: true,
        },
      ],

      // Imports
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-named-as-default': 'off',
      'sort-imports': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-absolute-path': 'error',
      'import/no-cycle': 'off',
      // @todo: This is currently throwing a LOT of false-positives, and the
      // docs are still quite poor with regards to flat configs. Off for now.
      'import/no-unresolved': 'off',
    },
  },
  pluginPrettier,
];
