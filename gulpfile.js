var gulp = require('gulp');
var yargs = require('yargs');
var plugins = require('gulp-load-plugins')();
var gulpSass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var args = yargs.argv;

sass.compiler = require('node-sass');

function js() {
	return gulp.src('src/js/**/*')
		.pipe(gulp.dest('./build/js'));
}

function sass(cb) {
	cb();
	console.log('OK?');
	return gulp.src('src/styles/**/*')
		.pipe(gulpSass())
		.pipe(gulp.dest('./build/styles'));
}

function views() {
	return gulp.src('src/views/**/*')
		.pipe(gulp.dest('./build/views'));
}

function img() {
	return gulp.src('src/img/**/*')
		.pipe(gulp.dest('./build/img'));
}

function watch() {
	gulp.watch('src/styles/*', sass);
	gulp.watch('src/views/*', views);
	gulp.watch('src/js/*', js);
	gulp.watch('src/img/*', img);
}

exports.js = js;
exports.sass = sass;
exports.views = views;
exports.img = img;
exports.watch = watch;
exports.default = gulp.parallel([js, sass, views, img]);
