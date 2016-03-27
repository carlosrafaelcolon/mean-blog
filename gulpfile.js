'use strict';

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer');

 // ... variables
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
    return gulp.src('views/**/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('dist')); // tell gulp our output folder
});

gulp.task("concatScripts", function(){

	return gulp.src(['scripts/vendor/jquery.js', 
			  'scripts/main.js'])
	.pipe(maps.init())
	.pipe(concat("jquery-merge.js"))
	.pipe(maps.write('./'))
	.pipe(gulp.dest("dist/assets/js"));
});

gulp.task("concatAngular", function(){

	return gulp.src([
		'scripts/vendor/angular.js',
		'scripts/vendor/angular-route.js', 
		'scripts/app/app.js',
		'scripts/app/controllers/controllers.js',
		'scripts/app/services/data.js',
		'scripts/app/filters/filter.js' ])
	.pipe(maps.init())
	.pipe(concat("angular-merge.js"))
	.pipe(maps.write('./'))
	.pipe(gulp.dest("dist/assets/js"));
});

gulp.task("minifyScripts", ["concatScripts"], function(){

	return gulp.src('dist/assets/js/jquery-merge.js')
	.pipe(uglify())
	.pipe(rename('jquery-merge.min.js'))
	.pipe(gulp.dest("dist/assets/js"));
});

gulp.task("minifyAngular", ["concatAngular"], function(){

	return gulp.src('dist/assets/js/angular-merge.js')
	.pipe(uglify())
	.pipe(rename('angular-merge.min.js'))
	.pipe(gulp.dest("dist/assets/js"));
});


gulp.task("compileSass", function(){

	return gulp.src('sass/application.scss')
	.pipe(maps.init())
	.pipe(sass())
	.pipe(autoprefixer(autoprefixerOptions)) 
	.pipe(maps.write('./'))
	.pipe(gulp.dest("dist/assets/css"));
});
 

gulp.task("watchFiles", function() {
	gulp.watch("sass/**/*.scss", ["compileSass"]);
	gulp.watch("scripts/main.js", ["concatScripts"]);
	gulp.watch("scripts/app/**/*.js", ["concatAngular"]);

	gulp.watch("views/**/*.jade", ["jade"]);

});

gulp.task("serve", ["watchFiles"] );

gulp.task("build", ["minifyScripts", "compileSass", "minifyAngular", "jade"]);

gulp.task("default", ["build"] );