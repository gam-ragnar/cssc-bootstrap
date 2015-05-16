Package.describe({
  summary: 'Bootstrap plugin for CSSC',
  version: '0.0.3',
  name: 'timfam:cssc-bootstrap',
  git: 'https://github.com/timfam/cssc-bootstrap.git'
});

Package.onUse(function(api) {
  api.use(['coffeescript@1.0.6', 'pierreeric:cssc@1.0.4',]);
  api.addFiles('cssc-bootstrap.coffee', 'client');
  api.imply('pierreeric:cssc');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('timfam:cssc-bootstrap');
  api.addFiles('cssc-bootstrap-tests.js');
});
