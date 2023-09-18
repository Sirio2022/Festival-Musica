const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

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

function dev(done) {
  watch('src/scss/**/*.scss', css);
  done();
}

exports.css = css;
exports.dev = dev;
