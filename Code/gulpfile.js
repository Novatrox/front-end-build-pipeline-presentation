/// <binding ProjectOpened='watch' />

var gulp = require('gulp');
var ts = require('gulp-typescript');
var Builder = require('systemjs-builder');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');

gulp.task('transpile:less', function () {
    return gulp.src('Styles/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('Styles/'));
});

gulp.task('transpile:ts', function () {
    return gulp.src('TypeScript/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts({
        target: 'ES5',
        module: 'system'
    }))
    .pipe(ngAnnotate())
    .pipe(sourcemaps.write('/', { includeContent: false, sourceRoot: '../TypeScript/' }))
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', ['transpile:less', 'transpile:ts'], function () {
    gulp.watch('Styles/**/*.less', ['transpile:less']);
    gulp.watch('Scripts/**/*.ts', ['transpile:ts']);
});





gulp.task('bundle:js', ['transpile:ts'], function () {
    bundleModule('app.js', './bundle/app.bundle.js', false);
    bundleModule('services/module.js', './bundle/services/services.bundle.js', false);
});

gulp.task('minify:js', ['transpile:ts'], function () {
    bundleModule('app.js', './dist/app.min.js', true);
    bundleModule('services/module.js', './dist/services/services.min.js', true);
});

function bundleModule(inPath, outPath, minify) {
    var builder = new Builder('./build/', './BundleConfig.js', { defaultJSExtensions: true });
    
    builder
        .bundle(inPath, outPath, {
            fetch: function (load, fetch) {
                if (load.name.substr(load.name.length - 3) !== '.js') {
                    load.name += '.js';
                    load.address += '.js';
                }
                return fetch(load);
            },
            minify: minify
        })
        .then(function () {
            console.log('Bundle complete');
        })
        .catch(function (err) {
            console.log('Bundle error');
            console.log(err);
        });
}
