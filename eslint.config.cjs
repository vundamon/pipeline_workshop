// Flat ESLint config bridging legacy style using FlatCompat for ESLint v9.
// Provides recommendedConfig/allConfig to avoid Missing parameter error.

const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  // Map "eslint:recommended" and "eslint:all" for compat.extends()
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  // Ignore patterns
  { ignores: ['dist', 'coverage'] },

  // Base JS recommended (applies universally; can be tuned later)
  js.configs.recommended,

  // TypeScript & Angular rules
  ...compat
    .extends('plugin:@angular-eslint/recommended')
    .map(cfg => ({
      ...cfg,
      files: ['**/*.ts'],
      languageOptions: {
        // Preserve any parser provided by compat (TypeScript parser)
        ...cfg.languageOptions,
        sourceType: 'module',
        parserOptions: {
          project: ['./tsconfig.json'],
        },
        // Explicit parser to satisfy Angular ESLint + TypeScript rules
        parser: require('@typescript-eslint/parser'),
        globals: {
          // Allow console without no-undef in TS files
          console: 'readonly',
        },
      },
      rules: {
        ...cfg.rules,
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: 'pw', style: 'kebab-case' },
        ],
      },
    })),

  // Jasmine unit test files (*.spec.ts)
  {
    files: ['**/*.spec.ts'],
    languageOptions: {
      sourceType: 'module',
      parser: require('@typescript-eslint/parser'),
      parserOptions: { project: ['./tsconfig.json'] },
      globals: {
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        expect: 'readonly',
        jasmine: 'readonly',
      },
    },
    rules: {
      // You could relax some rules for tests here if desired
    },
  },

  // Karma config (Node/CommonJS environment)
  {
    files: ['karma.conf.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
      },
    },
  },

  // Angular HTML templates
  ...compat.extends('plugin:@angular-eslint/template/recommended').map(cfg => ({
    ...cfg,
    files: ['**/*.html'],
  })),

  // Cypress tests
  ...compat.extends('plugin:cypress/recommended').map(cfg => ({
    ...cfg,
    files: ['cypress/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      ...cfg.languageOptions,
      globals: {
        // Common Cypress + Mocha globals
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly',
        context: 'readonly',
        expect: 'readonly',
      },
    },
  })),
];
