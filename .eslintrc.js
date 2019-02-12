module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  globals: {
    'AMap': true,
    '$': true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for   		stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [
    'html',
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'never'],
    'no-extra-semi': "error",
    'eqeqeq': 0,
    'spaced-comment': 0,
    'keyword-spacing': 0,
    "quotes": [0, "single"],
    'comma-dangle': 0,
    'curly': 0,
    'no-unused-expressions': 0,
    'padded-blocks': ["error", "never"],
    'space-before-function-paren': ["error", "always"],
    'no-mixed-operators': 0,
    'operator-linebreak': 0,
    'camelcase': 0,
    'no-lone-blocks': 0,
    'no-new': 0,
    'one-var': 0,
    'no-unneeded-ternary': 0
  }
}