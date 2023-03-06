module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-unused-vars": 0,
    "no-param-reassign": 0,
  },
};
