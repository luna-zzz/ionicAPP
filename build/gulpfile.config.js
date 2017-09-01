/*
 * @Author: admin
 * @Date:   2017-08-15 17:17:07
 * @Last Modified by:   admin
 * @Last Modified time: 2017-08-17 14:24:52
 */
var SRC_DIR = "./app/"; //源文件目录
var DIST_DIR = './www/'; //文件打包后存放的目录
var DIST_FILES = DIST_DIR + '**'; //目标路径下的所有文件

var Config = {
  src: SRC_DIR,
  dist: DIST_DIR,
  dist_files: DIST_FILES,
  html: {
    src: SRC_DIR + '/**/*.html',
    dist: DIST_DIR
  },
  assets: {
    src: SRC_DIR + 'assets/**/*', //assets目录：./app/assets
    dist: DIST_DIR + 'assets' //assets文件build后存放的目录 ./www/assets
  },
  css: {
    src: SRC_DIR + 'css/**/*.css', //CSS目录：./app/css
    dist: DIST_DIR + 'css' //CSS文件build后存放的目录 ./www/css
  },
  sass: {
    src: SRC_DIR + 'sass/**/*.scss', //SASS目录 ./app/sass
    dist: DIST_DIR + 'css' //SASS文件生成css后存放的目录
  },
  js: {
    src: SRC_DIR + 'js/**/*.js', //JS目录：./app/js
    dist: DIST_DIR + 'js', //JS文件build后存放的目录: ./www/js
    build_name: 'build.js', //合并后的js文件名
  },
  img: {
    src: SRC_DIR + 'img/**/*', //images目录：./app/img/
    dist: DIST_DIR + 'img'
  }
};

module.exports = Config;