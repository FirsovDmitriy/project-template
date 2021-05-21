"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";

import imagemin from "gulp-imagemin";
// import imageminPngquant from "imagemin-pngquant";
// import imageminZopfli from "imagemin-zopfli";
// import imageminMozjpeg from "imagemin-mozjpeg";
// import imageminGiflossy from "imagemin-giflossy";
import debug from "gulp-debug";
import browsersync from "browser-sync";
import yargs from "yargs";



const argv = yargs.argv,
    production = !!argv.production;

gulp.task("images", () => {
    return gulp.src(paths.images.src)
        .pipe(imagemin([

            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    // { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { prefixIds: true },
                    { collapseGroups: true }
                ]
            })
        ]))
        .pipe(gulp.dest(paths.images.dist))
        .pipe(debug({
            "title": "Images"
        }))
        .on("end", browsersync.reload);
});

