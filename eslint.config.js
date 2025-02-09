import pluginJs from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import pluginReact from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  jsdoc.configs['flat/recommended'],
  unicorn.configs['flat/all'],
  { settings: { react: { version: 'detect' } } },
  { ignores: ['build/*'] },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-max-depth': [2, { max: 4 }],
      'max-depth': [2, 4],
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-null': 'off',
      'unicorn/number-literal-case': ['error'],
    },
  },
];
