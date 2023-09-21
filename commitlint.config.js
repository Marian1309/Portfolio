module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [1, 'always', 100],
    'type-empty': [1, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'update'
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'general',
        'releases',
        'deps',
        'ui',
        'plugin',
        'framework',
        'config',
        'setup',
        'readme',
        'tools',
        'workflow'
      ]
    ]
  }
};
