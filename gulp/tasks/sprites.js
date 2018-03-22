// take icons
// create sprite in css mode
// that will give you .svg and .css files in a css folder
// then rename _sprite.css, and move to the modules folder
// then move the .svg graphic sprite file to asset folder
// then USE

var gulp = require("gulp");
var rename = require("gulp-rename");
var svgSprite = require("gulp-svg-sprite");
var del = require("del");

var config = {
  mode: {
    css: {
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("createSprite", function() {
  return gulp
    .src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/temp/sprite/"));
});

gulp.task("copySprite", ["createSprite"], function() {
  return gulp
    .src("./app/temp/sprite/css/sprite.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("./app/assets/styles/modules/"));
});

gulp.task("copyGraphic", ["createSprite"], function() {
  return gulp
    .src("./app/temp/sprite/css/**/*.svg")
    .pipe(gulp.dest("./app/assets/images/sprite/"));
});

gulp.task("removePrevAll", function() {
  return del(["./app/temp/sprite", "./app/assets/images/sprite"]);
});

gulp.task("endTimeRemove", ["copySprite", "copyGraphic"], function() {
  return del("./app/temp/sprite");
});

gulp.task("icons", [
  "removePrevAll",
  "createSprite",
  "copySprite",
  "copyGraphic",
  "endTimeRemove"
]);
