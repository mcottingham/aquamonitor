module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      app: {
        options: {
          rootPath: 'app',
          sourceMap: true,
          sourceMapFilename: 'app/app.css.map',
          sourceMapUrl: 'app.css.map'
        },
        files: {
          'app.css': 'app/app.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
};
