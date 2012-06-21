/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-css');

  // Project configuration.
  grunt.initConfig({
    concat: {
      dist: {
        src: ['stylesheets/components/bootstrap.min.css', 'stylesheets/components/base.css', 'stylesheets/pages/*.css'],
        dest: 'stylesheets/style.css'
      }
    },
    cssmin: {
      dist: {
        src: ['stylesheets/style.css'],
        dest: 'stylesheets/style.min.css'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'concat cssmin');

};
