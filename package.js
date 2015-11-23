Package.describe({
  name: 'irnc:react-intl',
  version: '0.0.1',
  summary: 'Just a wrapper for react-intl.',
  git: 'https://github.com/irnc/meteor-react-intl',
  documentation: 'README.md'
});

Npm.depends({
  'react-intl': '2.0.0-beta-1',
  'externalify': '0.1.0',
  'intl': '1.0.0'
});

Package.onUse(function (api) {
  api.use('react-runtime', 'client');
  api.use('cosmos:browserify', 'client');

  api.addFiles([
    'react-intl.browserify.js',
    'react-intl.browserify.options.json'
  ], 'client');

  api.export('ReactIntl', 'client');
});
