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
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      'error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'warn',
    'no-underscore-dangle': [2, { allow: ['_d', '__IS_DEV__'] }],
    quotes: ['error', 'single'],
    'max-len': [2, { ignoreComments: true, code: 100 }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        // devDependencies: [
        //   'test.{ts,tsx}', // repos with a single test file
        //   'test-*.{ts,tsx}', // repos with multiple top-level test files
        //   '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
        //   '**/jest.config.ts', // jest config
        //   '**/*.stories.ts', // storybook config
        //   '**/setupTests.ts', // jest setup
        // ],
        optionalDependencies: false,
        devDependencies: false,
        peerDependencies: false,
        usePackageJson: true,
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
