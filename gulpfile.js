var babelify = require("babelify");
var browserify = require("browserify");
var browserSync = require("browser-sync");
var buffer = require("vinyl-buffer");
var gulp = require("gulp");
var node = require("node-dev");
var source = require("vinyl-source-stream");

function errorHandler(err) {
  console.log("Error: " + err.message);
}

//Auto reloading of web browser.
gulp.task("browser-sync", function() {
  browserSync({
    proxy: {
      target: "http://localhost:9000"
    },
    port: 8080
  });
});

//Build to pure javascript for corresponding to ES6/JSX syntax.
gulp.task("build", function() {
  browserify({entries: ["./index.js"]})
    .transform(babelify)
    .bundle()
    .on("error", errorHandler)
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(gulp.dest("./build"))
    .pipe(browserSync.reload({stream: true}));
});

//Startup node server.
gulp.task("server", function() {
  node(["./server.js"]);
});

//Observation files.
gulp.task("watch", function() {
  gulp.watch("./index.js", ["build"]);
  gulp.watch("./index.html", ["build"]);
  gulp.watch("./components/*.js", ["build"]);
});

//Set default task.
gulp.task("default", ["server", "build", "watch", "browser-sync"]);
