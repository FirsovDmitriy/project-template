"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import svg from "gulp-svg-sprite";
import debug from "gulp-debug";
import browsersync from "browser-sync";

gulp.task("sprites", () => {
    return gulp.src(paths.sprites.src)
        .pipe(svg({
 
            shape: {
                dest: "intermediate-svg"
            },
            svg: { // General options for created SVG files
                xmlDeclaration: true, // Add XML declaration to SVG sprite
                doctypeDeclaration: true, // Add DOCTYPE declaration to SVG sprite
                namespaceIDs: true, // Add namespace token to all IDs in SVG shapes
                namespaceIDPrefix: '', // Add a prefix to the automatically generated namespaceIDs
                namespaceClassnames: true, // Add namespace token to all CSS class names in SVG shapes
                dimensionAttributes: true // Width and height attributes on the sprite
            },
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest(paths.sprites.dist))
        .pipe(debug({
            "title": "Sprites"
        }))
        .on("end", browsersync.reload);
});