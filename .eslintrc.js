module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": "error",
    "no-unused-vars": 2,
    "no-undef": 2,
  },
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true,
  },
};
