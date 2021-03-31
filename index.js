function checkCommitLanguage(options) {
  const { raw } = options;
  const chinese = new RegExp("[\\u4E00-\\u9FFF]+", "g");
  return [!chinese.test(raw), `Your commit submission cannot contain Chinese`];
}

module.exports = {
  rules: {
    "check-commit-language": (options) => checkCommitLanguage(options),
  },
};
