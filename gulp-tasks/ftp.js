"use strict";

import gulp from "gulp";
import gutil from "gutil";

import ftp from "vinyl-ftp";
import clipboardy from "clipboardy";



var localFiles = ['./dist/**'];

var dir = 'front.nopreset.net/' + __dirname.split('/').reverse()[1] + '/'

const remoteLocation = '/www/front.nopreset.net/' + __dirname.split('/').reverse()[1] + '/';


function getFtpConnection() {
    return ftp.create({
        host: "http://front.nopreset.net",
        port: 21,
        user: "front.nopreset.net",
        password: "J8a1I4i3",
        parallel: 5,
        reload: true,
        log: gutil.log
    });
}



gulp.task("ftp", async () => {

    await new Promise((resolve, reject) => {
        var conn = getFtpConnection();
        return gulp.src(localFiles, { buffer: false })
            .pipe(conn.newer(remoteLocation))
            .pipe(conn.dest(remoteLocation))
            .on("end", resolve);
    });

    clipboardy.writeSync(dir);
    console.log('\x1b[7m\x1b[32m%s\x1b[0m', 'Добавлено в буфер обмена: ' + dir);
});