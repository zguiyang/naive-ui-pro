module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-essential',
		'prettier',
		'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
  ],
  rules: {
		'prettier/prettier': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'typescript-eslint/triple-slash-reference': 'off',
  }
}
