module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {
        files: {                         // Dictionary of files
          'css/styles.css': 'styles/main.scss',       // 'destination': 'source'
        }
      }
    },
    postcss: {
      options: {
        map: true, // inline sourcemaps

        // or
        map: {
            inline: false, // save all sourcemaps as separate files...
            annotation: 'dist/css/maps/' // ...to the specified directory
        },

        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
    connect: {
      server: {
        options: {
          port: 9000
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js','**/*.scss'],
        tasks: ['sass','postcss'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass','postcss','connect','watch']);
}
