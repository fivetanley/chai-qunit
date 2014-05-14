module.exports = function(grunt){

  Array.prototype.chunk = function(chunkSize) {
    var array=this;
    return [].concat.apply([],
      array.map(function(elem,i) {
        return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
      })
    );
  }

  var matchdep = require('matchdep');
  matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var karmaLaunchers = {

    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 8.1'
    },

    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Windows 8.1'
    },
    
    /*
    sl_ios_7: {
      base: 'SauceLabs',
      browserName: 'iphone',
      version: '7.1'
    },
   */

    sl_android_43: {
      base: 'SauceLabs',
      browserName: 'android',
      version: '4.3'
    },

    ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11',
      platform: 'Windows 8.1'
    },

    ie_10: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '10',
      platform: 'Windows 8'
    },

    ie_9: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '9',
      platform: 'Windows 7'
    },

    safari_7: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: '7',
      platform: 'OS X 10.9'
    }

  };

  var karmaChunks = Object.keys(karmaLaunchers).chunk(2);

  var i = 0;
  var karmaConfig = karmaChunks.reduce(function(memo, array){
    memo['browsers' + i++] = {
        captureTimeout: 120000,
        configFile: 'karma.conf.js',
        singleRun: true,
        port: 9876,
        customLaunchers: karmaLaunchers,
        browsers: array,
        reporters: [ 'dots', 'saucelabs' ],
        sauceLabs: {
          testName: 'chai-qunit',
          recordScreenshots: false
        },
    };
    return memo;
  }, {});

  karmaConfig.sauceLabs = {
    recordScreenshots: false
  };

  grunt.initConfig({
    clean: {
      all: [ 'dist/**/*' ]
    },
    broccoli: {
      dist: {
        dest: 'dist',
        config: 'Brocfile.js'
      }
    },
    karma: karmaConfig,

    'release-it': {
      pkgFiles: [ 'package.json', 'bower.json' ],
      commitMessage: 'Release %s',
      tagName: '%s',
      tagAnnotation: 'Relase %s',
      buildCommand: 'grunt && npm test'
    }
  });

  var browserTasks = Object.keys(karmaConfig).filter(function(taskName){
    return /browsers/.exec(taskName)
  }).map(function(t){ return 'karma:' + t });

  grunt.registerTask('default', [ 'clean', 'broccoli:dist:build' ]);
  grunt.registerTask('test', browserTasks);
};
