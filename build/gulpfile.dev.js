var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer'); //处理css中浏览器兼容的前缀
var rename = require('gulp-rename'); //重命名
var cssnano = require('gulp-cssnano'); //css的层级压缩合并
var sass = require('gulp-sass'); //sass
var jshint = require('gulp-jshint'); //js检查（jshint gulp-jshint）-save-dev
var uglify = require('gulp-uglify'); //js压缩
var concat = require('gulp-concat'); //合并文件
var imagemin = require('gulp-imagemin'); //图片压缩
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var Config = require('./gulpfile.config.js');

//==========开发环境下 gulp dev============
function dev() {
  /*  HTML处理 */
  gulp.task('html:dev', function() {
    return gulp.src(Config.html.src)
      // .pipe(gulp.dest(Config.html.dist))
      .pipe(reload({
        stream: true
      }));
  });

  /* assets文件夹下的所有文件处理 */
  gulp.task('assets:dev', function() {
    return gulp.src(Config.assets.src)
      // .pipe(gulp.dest(Config.assets.dist))
      .pipe(reload({
        stream: true
      }));
  });

  /* css样式处理 */
  gulp.task('css:dev', function() {
    return gulp.src(Config.css.src)
      // .pipe(gulp.dest(Config.css.dist))
      .pipe(reload({
        stream: true
      }));
  });

  /* sass样式处理 */
  gulp.task('sass:dev', function() {
    return gulp.src(Config.sass.src)
      .pipe(sass())
      .pipe(gulp.dest('./app/css'))
      .pipe(reload({
        stream: true
      }));
  });

  /* js处理 */
  gulp.task('js:dev', function() {
    return gulp.src(Config.js.src)
      // .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('default'))
      // .pipe(gulp.dest(Config.js.dist))
      .pipe(reload({
        stream: true
      }));
  });

  /* 图片处理 */
  gulp.task('images:dev', function() {
    return gulp.src(Config.img.src)
      .pipe(imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }))
      // .pipe(gulp.dest(Config.img.dist))
      .pipe(reload({
        stream: true
      }));
  });

  gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
        baseDir: Config.src
      },
      notify: false
    });
  });

  gulp.task('watch', function() {
    //watch files
    gulp.watch(Config.html.src, ['html:dev']);
    gulp.watch(Config.css.src, ['css:dev']);
    gulp.watch(Config.sass.src, ['sass:dev']);
    gulp.watch(Config.assets.src, ['assets:dev']);
    gulp.watch(Config.js.src, ['js:dev']);
    gulp.watch(Config.img.src, ['images:dev']);
  });

  gulp.task('dev', ['html:dev', 'assets:dev', 'css:dev', 'js:dev', 'images:dev', 'browser-sync', 'watch']);

};

module.exports = dev;