import gulp, { task } from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import rename from 'gulp-rename';

import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import del from 'del';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

const ALL_SOURCES = [
   '*.js',
   'lib/*.js',
   'test/*.js',
];

task('lint', function() {
   return gulp.src(ALL_SOURCES)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      ;
});

task('clean', function() {
   return Promise.all([del('dist/'), del('coverage/')]);
});

const bundledConfig = {
   debug: true,
   entries: 'lib/Discourse.js',
   standalone: 'Discourse',
};
const externalConfig = {
   debug: true,
   entries: 'lib/Discourse.js',
   standalone: 'Discourse',
   external: [
      'axios',
      'js-base64',
      'es6-promise',
      'debug',
      'utf8',
   ],
   bundleExternal: false,
};
task('build:bundled:min', function() {
   return buildBundle(bundledConfig, '.bundle.min.js', true);
});
task('build:external:min', function() {
   return buildBundle(externalConfig, '.min.js', true);
});
task('build:bundled:debug', function() {
   return buildBundle(bundledConfig, '.bundle.js', false);
});
task('build:external:debug', function() {
   return buildBundle(externalConfig, '.js', false);
});
task('build:components', function() {
   return gulp.src('lib/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/components'))
      ;
});

function buildBundle(options, extname, minify) {
   let stream = browserify(options)
      .transform('babelify')
      .bundle()
      .pipe(source('Discourse.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({
         loadMaps: true,
      }));

   if (minify) {
      stream = stream.pipe(uglify());
   }

   return stream.pipe(rename({extname}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'))
      ;
}

// Main endpoint
task('build', gulp.series([
   'build:bundled:min',
   'build:external:min',
   'build:bundled:debug',
   'build:external:debug',
   'build:components',
]));
