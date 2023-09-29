const { src, dest, watch, parallel } = require('gulp');
// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imagenes
const webp = require('gulp-webp');


function css(done) {
  // Identify the source file SASS
  src('src/scss/**/*.scss')
    // Process the file
    .pipe(plumber())
    .pipe(sass())

    // Write the destination file

    .pipe(dest('build/css'));

  done(); // Signal completion
}

function versionWebp(done) {

  const versionWebp = {
    quality: 50
  }


  src('src/img/**/*.{png,jpg}')
    .pipe(webp( versionWebp))
    .pipe(dest('build/img'));

  done();
}

function dev(done) {
  watch('src/scss/**/*.scss', css);
  done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(dev, versionWebp);
