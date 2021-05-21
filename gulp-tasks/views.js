"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";
import yargs from "yargs";
import typograf from "gulp-typograf"
import pug from 'gulp-pug-3';

gulp.task("views", () => {
    return gulp.src(paths.views.src)
        .pipe(pug({
            extension: 'html',
        }))

        .pipe(typograf({
            htmlEntity: { type: 'name' },
            locale: ['ru', 'en-US'],
        }))

        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});