var broccoli = require('broccoli');
var tree = require('broccoli-dist-es6-module')('lib', {
  global: 'chaiQUnit',
  packageName: 'chai-qunit',
  main: 'chai-qunit',
  shim: {
    'chai': 'chai',
    'qunit': 'QUnit'
  }
});
module.exports = tree;
