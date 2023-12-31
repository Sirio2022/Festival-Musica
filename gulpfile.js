const { src, dest, watch, parallel } = require('gulp');
// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// Imagenes
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const avif = require('gulp-avif');

// JavaScript
const terser = require('gulp-terser-js');

function css(done) {
  // Identify the source file SASS
  src('src/scss/**/*.scss')
    // Process the file
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))

    // Write the destination file

    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'));

  done(); // Signal completion
}

function versionWebp(done) {
  const versionWebp = {
    quality: 50,
  };

  src('src/img/**/*.{png,jpg}').pipe(webp(versionWebp)).pipe(dest('build/img'));

  done();
}

function versionAvif(done) {
  const versionAvif = {
    quality: 50,
  };

  src('src/img/**/*.{png,jpg}').pipe(avif(versionAvif)).pipe(dest('build/img'));

  done();
}

function minifyImage(done) {
  const minifyImage = {
    optimizationLevel: 3,
  };

  src('src/img/**/*.{png,jpg}')
    .pipe(cache(imagemin(minifyImage)))
    .pipe(imagemin())
    .pipe(dest('build/img'));

  done();
}

function javascript(done) {
  src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));

  done();
}

function dev(done) {
  watch('src/scss/**/*.scss', css);
  watch('src/scss/**/*.js', javascript);

  done();
}

exports.css = css;
exports.javascript = javascript;
exports.versionAvif = versionAvif;
exports.minifyImage = minifyImage;
exports.versionWebp = versionWebp;
exports.dev = parallel(
  dev,
  versionWebp,
  minifyImage,
  versionAvif,
  javascript,
  css
);
