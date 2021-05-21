"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import favicons from "gulp-favicons";
import debug from "gulp-debug";

gulp.task("favicons", () => {
    return gulp.src(paths.favicons.src)
        .pipe(favicons({
            appName:  __dirname.split('/').reverse()[1],
            appShortName:  __dirname.split('/').reverse()[1],
            // appDescription: "This is my application",
            // developerName: "Hayden Bleasel",
            // developerURL: "http://haydenbleasel.com/",
            // background: "#020307",
            path: "",
            // url: "http://haydenbleasel.com/",
            display: "standalone",
            orientation: "portrait",
            start_url: "/?homescreen=1",
            version: 1.0,
            logging: false,
            html: "index.html",
            pipeHTML: true,
            replace: true,
            lang: "ru-RU",
            icons: {
                android: true,              
                appleIcon: true,            
                appleStartup: false,
                coast: true,
                favicons: true,
                firefox: true,
                windows: true,
                yandex: true
            }
        }))
        .pipe(gulp.dest(paths.favicons.dist))
        .pipe(debug({
            "title": "Favicons"
        }));
});