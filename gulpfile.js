// Gulp & Modules //
var $gulp = require('gulp');
var $plugins = require('gulp-load-plugins')();


// Config //
var path = {
    files: {
        css: 'src/css/*.css',
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
        css: 'src/css',
        js: 'src/js',
        jsBuild: 'src/js/build'
    }
};

var tsProject = $plugins.typescript.createProject({
    declarationFiles: true,
    noExternalResolve: true
});


// Watch //
$gulp.task('default', function(){
    $plugins.livereload.listen();

    $gulp.watch(path.files.scss, ['sass'])
        .on('change', function(event){
            console.log('Change detected on "' + event.path +'"');
        });

    $gulp.watch(path.files.ts, ['typescript'])
        .on('change', function(event){
            console.log('Change detected on "' + event.path +'"');
        });

    $gulp.watch(['index.html', path.files.css, path.dirs.js + '/app.min.js'])
        .on('change', function(event){
            $plugins.livereload.changed(event.path);
        })
});


// Tasks //
$gulp.task('compile', function(){
    $gulp.src('src/js/*.js')
        .pipe($plugins.uglify())
        .pipe($plugins.rename(function(path){
            path.basename += '.min'
        }))
        .pipe($gulp.dest(path.dirs.js));

    $gulp.src(path.files.css)
        .pipe($plugins.minifyCss())
        .pipe($plugins.rename(function(path){
            path.basename += '.min'
        }))
        .pipe($gulp.dest(path.dirs.css));
})

$gulp.task('sass', function(){
    return $gulp.src(path.files.scss)
        //compile
        .pipe($plugins.sass({
            onError: console.error.bind(console, 'SASS Error:')
        }))
        //prefix
        .pipe($plugins.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe($gulp.dest(path.dirs.css));
});

$gulp.task('typescript', function(){
    return $gulp.src(path.files.ts)
        .pipe($plugins.typescript(tsProject))
        .pipe($gulp.dest(path.dirs.jsBuild))
        .pipe($plugins.concat('app.min.js'))
        .pipe($gulp.dest(path.dirs.js));
});