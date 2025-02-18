
/** @type {import('eslint').Linter.Config[]} */
export const typescriptBase = [
  {
    rules: {
      // Code cleanliness
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
          readonly: 'array',
        },
      ],
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'local',
          args: 'after-used',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: false,
        },
      ],
      // Potential bugs
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'off',
          },
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            // Index signature
            'signature',

            // Fields
            'public-field',
            'protected-field',
            'private-field',
            'field',
            'constructor',
            'private-method',
            'protected-method',
            'public-method',
            'method',
          ],
        },
      ],
    },
  },
];

/** @type {import('eslint').Linter.Config[]} */
export const typescriptTypeCheckedBase = [
  {
    rules: {
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          // enforce variables/functions to camelCase
          selector: ['variable', 'function'],
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: ['parameter'],
          format: ['camelCase'],
        },
        {
          // Force destructured params to camel case
          selector: ['parameter'],
          modifiers: ['destructured'],
          format: ['camelCase'],
        },
        {
          // Allow certain params to pascal case
          selector: ['parameter', 'typeProperty', 'objectLiteralProperty'],
          format: ['PascalCase', 'camelCase'],
          filter: {
            regex: '(Icon|Component|Story|BoosterIcon)$',
            match: true,
          },
        },
        {
          // Allow certain destructured params to pascal case
          selector: ['parameter'],
          modifiers: ['destructured'],
          format: ['PascalCase', 'camelCase'],
          filter: {
            regex: '(Icon|Component|Story)$',
            match: true,
          },
        },
        {
          // Force unused params to have leading underscore
          selector: ['parameter', 'variable'],
          modifiers: ['unused'],
          leadingUnderscore: 'require',
          format: ['camelCase'],
        },
        {
          // allow styled components to uppercase
          selector: ['variable', 'function'],
          modifiers: ['global'],
          format: ['camelCase', 'PascalCase'],
        },
        {
          // enforce global constants as UPPER_CASE
          selector: 'variable',
          modifiers: ['global', 'const'],
          types: ['boolean', 'string', 'number'],
          format: ['UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          // Ignore properties that require quotes
          selector: [
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
            'enumMember',
          ],
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          // Enums
          selector: ['enum', 'enumMember'],
          format: ['PascalCase'],
        },
        {
          // Classes
          selector: ['class', 'interface', 'typeAlias'],
          format: ['PascalCase'],
        },
        {
          // Properties
          selector: ['property', 'accessor'],
          modifiers: ['public'],
          format: ['camelCase'],
        },
        {
          // Private properties
          selector: ['property', 'method'],
          modifiers: ['private', 'protected'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          // static properties
          selector: ['property', 'method'],
          modifiers: ['static', 'public'],
          format: ['PascalCase'],
        },
        {
          // Private static properties
          selector: ['classProperty'],
          modifiers: ['private', 'protected', 'static'],
          format: ['PascalCase'],
          leadingUnderscore: 'require',
        },
        {
          // Allow '__typename' property used in Apollo cache modifications and TypeScript types
          selector: ['objectLiteralProperty', 'typeProperty'],
          format: null,
          filter: {
            regex: '^__typename$',
            match: true
          }
        },
      ],
    },
  },
];
