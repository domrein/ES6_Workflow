module.exports = function(grunt) {
  grunt.initConfig({

    // traceur: {
    //     custom: {
    //         files:{
    //             "build/": ["src/**/*.js"]
    //         }
    //     }
    // }

    traceur: {
      options: {
        sourceMaps : true,
        // generators : true,
        // arrowFunctions : true,
        // defaultParameters : true,
        // destructuring : true,
        // restParameters : true,
        // spread : true,
        // arrayComprehension : true,
        // classes : true,
        // computedPropertyNames : true,
        // forOf : true,
        // generatorComprehension : true,
        // numericLiterals : true,
        // propertyMethods : true,
        // propertyNameShorthand : true,
        // templateLiterals : true,
        // blockBinding: true,
        modules: "amd"
        // out: "build/compiled.js"
      },
      es6: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'tmp',
            ext: '.js'
          }
        ]
      }
    },
    // uglify: {
    //   buildGame: {
    //     options: {
    //       sourceMapIn: "tmp/concatenated.js.map",
    //       sourceMap: true,
    //       sourceMapName: "build/game.min.js.map",
    //       sourceMapIncludeSources: true,
    //       // NOTE: the following two items should be turned off for a final build
    //       // mangle: false, // variable names in source map weren't being unmangled TODO: make a prod build that mangles
    //       // compress: {sequences: false, join_vars: false}
    //     },
    //     files: {
    //       "build/game.min.js": [
    //         "tmp/concatenated.js"
    //       ]
    //     }
    //   }
    // },
    watch: {
      scripts: {
        files: [
          "src/**/*.js",
        ],
        tasks: ["clean", "traceur", "concat_sourcemap"],
        options: {
          spawn: false,
        },
      },
    },
    concat_sourcemap: {
      target: {
        files: {
          "build/game.js": ["tmp/*.js"]
        }
      }
    },
    clean: ["tmp"]
  });

  // grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-traceur");
  grunt.loadNpmTasks("grunt-concat-sourcemap");
  grunt.loadNpmTasks("grunt-contrib-clean");

  grunt.registerTask("default", ["clean", "traceur", "concat_sourcemap", "watch"]);
  // TODO: make a release version that includes uglify (because I can't get uglify to preserve source maps!)
  // grunt.registerTask("buildRelease", ["clean", "traceur", "concat_sourcemap", "uglify", "watch"]);
};
