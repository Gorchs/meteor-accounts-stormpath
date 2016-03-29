Package.describe({
  name: 'gorchs:accounts-stormpath',
  version: '0.0.1',
  summary: 'OAuth2 for Stormpath',
  git: 'https://github.com/3scale/gorchs-accounts-stormpath',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('gorchs:stormpath@0.0.1', ['client', 'server']);

  api.addFiles('accounts-stormpath.js');
});