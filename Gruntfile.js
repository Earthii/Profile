module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        serve: {
            options: {
                port: 9000,
                'path': 'http://localhost:9000/index.html'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-serve');

    // Default task(s).
    grunt.registerTask('default', ['serve']);

};