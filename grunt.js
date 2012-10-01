/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-css');

  // Project configuration.
  grunt.initConfig({
    concat: {
      conference: {
        src: ['stylesheets/components/bootstrap.min.css', 'stylesheets/components/base.css', 'stylesheets/pages/conference/*.css'],
        dest: 'stylesheets/conference.css'
      },

      summits: {
        src: ['stylesheets/components/bootstrap.min.css', 'stylesheets/components/base.css', 'stylesheets/pages/summits/*.css'],
        dest: 'stylesheets/summits.css'
      }
    },

    cssmin: {
      conference: {
        src: ['stylesheets/conference.css'],
        dest: 'stylesheets/dist/conference.min.css'
      },

      summits: {
        src: ['stylesheets/summits.css'],
        dest: 'stylesheets/dist/summits.min.css'
      }
    },

    watch: {
      css: {
        files: ["stylesheets/**/*.css"],
        tasks: "concat cssmin"
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'concat cssmin');

};
