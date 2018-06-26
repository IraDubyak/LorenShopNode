var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require("gulp-rename"),
	browserSync = require('browser-sync').create(),
	validator = require('gulp-html'),
	htmlmin = require('gulp-htmlmin'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	image = require('gulp-image');

gulp.task('browser-sync', ['styles', 'uglify', 'html', 'image', 'scripts'], function () {
	browserSync.init({
		server: {
			baseDir: 'build'
		},
		notify: false
	});
});
gulp.task('image', function () {
	gulp.src('./app/img/**/*')
		.pipe(image())
		.pipe(gulp.dest('build/img'))
});

gulp.task('styles', function () {
	return gulp.src('./app/style/**/*.css')
		.pipe(rename({
			suffix: '.min',
			preffix: ''
		}))
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: true
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream());
});


gulp.task('html', function () {
	return gulp.src('./app/templates/**/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('build'));
});



gulp.task('uglify', function () {
	gulp.src('./app/js/**/*.js')
		//		.pipe(uglify())
		//		.pipe(concat('all.js'))
		.pipe(gulp.dest('build/js'))
});

gulp.task('scripts', function() {
    return gulp.src([
    	'./app/js/routing.js',
    	'./app/js/constants.js',
		'./app/js/factories/factory.js',
		'./app/js/directives/directives.js',
		'./app/js/controllers/home.controller.js',
		'./app/js/factories/factory.js',
		'./app/js/factories/user_factory.js',
		'./app/js/factories/man_woman_service.js',
		'./app/js/factories/session_factory.js',
		'./app/js/controllers/woman.contoller.js',
		'./app/js/controllers/cart.controller.js',
		'./app/js/controllers/main.controller.js',
		'./app/js/controllers/man.controller.js',
		'./app/js/controllers/contact_us.controller.js',
		'./app/js/controllers/login.controller.js',
		'./app/js/controllers/registration.controller.js',
		'./app/js/factories/registered_user_factory.js',
		'./app/js/controllers/profile.controller.js',
		'./app/js/controllers/application.controller.js',
		'./app/js/controllers/customer_information.controller.js',
		'./app/js/controllers/payment_method.controller.js',
		'./app/js/controllers/shipping_method.controller.js',
		'./app/js/controllers/single_product.controller.js',
		'./app/js/script.js',
		'./app/js/slick/slick.min.js'
    ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('build', ['styles', 'uglify', 'html', 'image', 'scripts']);


gulp.task('watch', function () {
	gulp.watch('app/style/**/*.css', ['styles']);
	gulp.watch('app/templates/**/*.html', ['html']);
	gulp.watch('app/img/**/*', ['image']);
	gulp.watch('app/js/**/*.js', ['uglify']);
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
