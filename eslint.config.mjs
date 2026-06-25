// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import pluginOxlint from 'eslint-plugin-oxlint';

export default withNuxt(
  {
    files: ['**/*.vue'],
    rules: {
      'vue/require-default-prop': 'off',
      'vue/max-attributes-per-line': 'error',
      'vue/attributes-order': 'error',
      'vue/block-order': 'error',
    },
  },
  {
    files: ['layers/**/pages/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/layouts/**/*.vue'],
    rules: {
      'vue/no-multiple-template-root': 'off',
    },
  },
  ...pluginOxlint.configs['flat/recommended'],
);
