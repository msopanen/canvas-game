module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: { react: { version: '18.2' } },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jest','react-refresh','prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'trailingComma' : 'off',
    'quotes': [
      'error',
      'double',
      { 'avoidEscape': true, 'allowTemplateLiterals': true }
    ]
  },
}
