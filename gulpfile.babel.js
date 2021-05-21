"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/views/**/*.pug"
            ]
        },
        styles: {
            src: ["./src/styles/main.{scss,sass}", ],
            dist: "./dist/tpl/css/",
            watch: [
                "./**/*.{scss,sass}",

            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/tpl/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/tpl/",
            watch: "./src/**/*.{jpg,jpeg,png,gif,svg}"
        },
        video: {
            src: [
                "./src/**/*.{mp4,webm}",

            ],
            dist: "./dist/tpl/",
            watch: "./src/**/*.{mp4,webm}"
        },
        // webp: {
        //     src: [
        //         "./src/**/*.{jpg,jpeg,png,tiff}",
        //         "!./src/favicon/*.{jpg,jpeg,png,gif}"
        //     ],
        //     dist: "./dist/tpl/",
        //     watch: [
        //         "./src/**/*.{jpg,jpeg,png,tiff}",
        //         "!./src/favicon.{jpg,jpeg,png,gif}"
        //     ]
        // },
        sprites: {
            src: "./src/assets/svg/*.svg",
            dist: "./dist/tpl/sprites/",
            watch: "./src/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2,ttf}",
            dist: "./dist/tpl/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2,ttf}"
        },
        favicons: {
            src: "./src/assets/favicon/*.{jpg,jpeg,png,gif,tiff}",
            dist: "./dist/tpl/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        },

    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean",
    
    gulp.parallel(["views", "styles", "scripts", "images", "sprites", "fonts", "video" ]),
    
    gulp.parallel("serve")
    );

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "sprites", "fonts", "favicons", "gzip", "video"]),
    
    gulp.parallel("ftp")
    
    );

export default development;