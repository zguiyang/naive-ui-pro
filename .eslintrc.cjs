module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-essential'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // turns a rule on with no configuration (i.e. uses the default configuration)
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/semi': ["error", "always"],
    // turns on a rule with configuration
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }]
  }
}
