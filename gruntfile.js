module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: ['E:/CAS/Dropbox (CAS)/Udacity/Front-End Web Developer Nanodegree/version-control/frontend-nanodegree-mobile-portfolio/index.html',
                'E:/CAS/Dropbox (CAS)/Udacity/Front-End Web Developer Nanodegree/version-control/frontend-nanodegree-mobile-portfolio/css',
                'E:/CAS/Dropbox (CAS)/Udacity/Front-End Web Developer Nanodegree/version-control/frontend-nanodegree-mobile-portfolio/js/perfmatters.js',
                'E:/CAS/Dropbox (CAS)/Udacity/Front-End Web Developer Nanodegree/version-control/frontend-nanodegree-mobile-portfolio/views/images/pizzeria.jpg',
                'E:/CAS/Dropbox (CAS)/Udacity/Front-End Web Developer Nanodegree/version-control/frontend-nanodegree-mobile-portfolio/views/images/scaled/pizzeria.jpg',
                'E:/CAS/Dropbox (CAS)/Udacity/Front-End Web Developer Nanodegree/version-control/frontend-nanodegree-mobile-portfolio/views/images/small/pizzeria.jpg',
                'E:/CAS/Dropbox (CAS)/Udacity/Front-End Web Developer Nanodegree/version-control/frontend-nanodegree-mobile-portfolio/img/profilepic.jpg'],

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css-src',
                    src: ['*.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            my_target: {
                files: {
                    'js/perfmatters.min.js': ['js-src/perfmatters.js']
                }
            }
        },

        image_resize: {
            resize: {
                options: {
                    width: 100,
                    height: 75,
                    overwrite: true
                },
                files: {
                    'views/images/scaled/pizzeria.jpg': 'views/images/src/pizzeria.jpg' //dest then src
                }
            }
        },

        image: {
            static: {
                options: {
                    mozjpeg: true,
                    jpegRecompress: true,
                    jpegoptim: true
                },
                files: {
                    'views/images/small/pizzeria.jpg': 'views/images/scaled/pizzeria.jpg',
                    'img/profilepic.jpg': 'img/src/profilepic.jpg'
                }
            }
        },

        critical: {
            frontend_nanodegree_mobile_portfolio: {
                options: {
                    base: './',
                    css: [
                        'css-src/style.css'
                    ],
                    width: 320,
                    height: 570
                },
                src: 'html-src/index.html',
                dest: 'index.html'
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-critical');

    grunt.registerTask('default', ['clean', 'image_resize', 'image', 'cssmin', 'uglify', 'critical']);
};