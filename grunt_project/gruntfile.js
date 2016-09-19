module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.main.js'
      },
      css: {
        src: ['src/css/*.css'],
        dest: 'dist/css/style.main.css'
      }
    },
    cssmin: {
      css: {
        src: 'dist/css/style.main.css',
        dest: 'dist/css/style.main.min.css'
      }
    },
    uglify: {
      js: {
        src: 'dist/js/script.main.js',
        dest: 'dist/js/script.main.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat','cssmin','uglify']);

};