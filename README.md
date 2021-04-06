# commitlint-plugin-commit-check

Check if your commit submission contains Chinese.

## Installation

```jsx
npm install commitlint-plugin-commit-check --save-dev

or

yarn install commitlint-plugin-commit-check
```

## Usage

In your commitlint.config.js:

```jsx
module.exports = {
  rules: {
    "check-commit-language": [2, "always"],
  },
  plugins: ["commitlint-plugin-commit-check"],
};
```
