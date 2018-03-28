var gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssimport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  hexrgba = require("postcss-hexrgba");

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssimport, mixins, cssvars, hexrgba, nested, autoprefixer]))
    .on("error", function(errorinfo) {
      console.log(errorinfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
