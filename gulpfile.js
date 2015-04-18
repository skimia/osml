// Gulp & Modules //
var $gulp = require('gulp');
var $plugins = require('gulp-load-plugins')();


// Config //
var path = {
    files: {
        css: 'app/css/*.css',
        scss: [
            'app/css/scss/*.scss',
            'app/css/scss/**/*.scss'
        ],
        js: 'app/js/build/**/*.js',
        jsMain: 'app/js/osml.js',
        ts: [
            'app/js/ts/**/*.ts',
            'app/js/ts/*.ts'
        ],
        tsMain: 'app/js/ts/osml.ts'
    },
    dirs: {
        css: 'app/css',
        js: 'app/js',
        jsBuild: 'app/js/build'
    }
};

var jsOrder = [
    'app/js/build/directives/*.js',
    'app/js/build/services/*.js',
    'app/js/build/osml.js'
]

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

    $gulp.watch(['index.html', path.dirs.css + '/osml.css', path.dirs.js + '/osml.js'])
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
    return $gulp.src(path.files.tsMain, {read: false})
        .pipe($plugins.typescriptCompiler({
            resolve: true,
            logErrors: true,
            sourcemap: false
        }))
        //.pipe($gulp.dest(path.dirs.jsBuild))
        //.pipe($plugins.requireOrder())
        .pipe($plugins.concat('osml.js'))
        .pipe($gulp.dest(path.dirs.js));
});