/***************************
 *  Module Requirements
 **************************/

var gulp = require('gulp');
var live = require('gulp-livereload');
var tsc = require('gulp-typescript');
var prefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

/***************************
 *  Config
 **************************/

var path = {
    files: {
        index: [
            'index.html'
        ],
        html: [
            'components/*.html'
        ],
        css: [
            'app/css/*.css',
            'app/css/**/*.css'
        ],
        js: [
            'app/js/osml.js'
        ],
        scss: [
            'src/scss/*.scss',
            'src/scss/**/*.scss'
        ],
        ts: [
            'src/ts/*.ts',
            'src/ts/**/*.ts'
        ]
    },
    dirs: {
        css:'app/css',
        js: 'app/js'
    },
    prod: {
        css:'../cms/themes/default/assets/default/css',
        js: '../cms/core/Backend/js',
        html: '../cms/themes/default/assets/default/osml/components'
    }
}

/***************************
 *  Gulp Tasks
 **************************/

/**** Watch ****/
gulp.task('default', function() {
    live.listen();

    // app files watch for livereload
    gulp.watch([path.files.index, path.files.html, path.files.css, path.dirs.js])
        .on('change', function(event){
            live.changed(event.path);
        })

    // html src files watch for copy to prod
    gulp.watch(path.files.html)
        .on('change', function (event) {
            console.log('-----Change detected on "' + event.path + '"-----');
            gulp.src(event.path)
                .pipe(gulp.dest(path.prod.html));
            console.log('Files copied');
        });

    // ts src files watch for compile to js
    gulp.watch(path.files.ts, ['ts'])
        .on('change', function (event) {
            console.log('-----Change detected on "' + event.path + '"-----');
        });

    // scss src files watch for compile to css
    gulp.watch(path.files.scss, ['sass'])
        .on('change', function(event){
            console.log('-----Change detected on "' + event.path +'"-----');
        });
});

/**** SASS ****/
gulp.task('sass', function(){
    return gulp.src(path.files.scss)
        .pipe(sass({
            onError: console.error.bind(console, 'SASS Error:')
        }))
        .pipe(prefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(path.dirs.css))
        .pipe(gulp.dest(path.prod.css));
});

/**** Typescript ****/
gulp.task('ts', function(){
    return gulp.src(path.files.ts)
        .pipe(tsc({
            out: 'osml.js',
            removeComments: true
        }))
        .js.pipe(gulp.dest(path.dirs.js))
        .pipe(gulp.dest(path.prod.js));
});

