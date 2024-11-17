module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        vars: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': ['warn', { exceptions: ['input', 'button', 'select', 'SvgIcon'] }],
    'no-underscore-dangle': [2, { allow: ['_d', '__IS_DEV__', '__API__', '__PROJECT__', '_inited'] }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'max-len': [
      2,
      {
        ignoreComments: true,
        code: 120,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.ts',
          '**/*.stories.tsx',
          '**/*.test.tsx',
          '/config/**',
          '**/*.test.ts',
          '**/storybook/**',
        ],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-undef': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 4,
        },
        ObjectPattern: { multiline: true },
        ImportDeclaration: {
          multiline: true,
          minProperties: 4,
        },
        ExportDeclaration: 'never',
      },
    ],
    'arrow-parens': [1, 'as-needed', { requireForBlockBody: true }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
