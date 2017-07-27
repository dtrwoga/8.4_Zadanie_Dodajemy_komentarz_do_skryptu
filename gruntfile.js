module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON("package.json"),
	jshint: {
      		all: ['js/*.js']
    	},
	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css':'sass/style.sass'
  			}
  		}
  	},
	imagemin: {
    		dynamic: {
        		files: [{
            			expand: true,
            			cwd: 'images/',
            			src: ['**/*.{png,jpg,gif}'],
            			dest: 'images/build/'
        		}]
    		}
	},
	browserSync: {
            	default_options: {
                	bsFiles: {
                    		src : [
                        		'/css/*.css',
                        		'/*.html'
                    		]
                	},
                	options: {
                    		watchTask: true,
                    		server: {
					baseDir: './'
				}
                	}
            	}
        },
	watch: {
    		scripts: {
        		files: ['sass/style.sass'],
        			tasks: ['sass'],
        			options: {
            			spawn: false,
        		},
    		}
	}
  });
  // Load the plugins tasks
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  
  // Default task(s)

  grunt.registerTask('default', ['jshint','browserSync', 'sass', 'imagemin', 'watch']);
 };