'use strict'

// DEPENDENCIES
const gulp = require('gulp'),
    tslint = require('gulp-tslint'),
    ts = require('gulp-typescript'),
    nodemon = require('gulp-nodemon')

// TSLINT
gulp.task('ts-lint', () => {
    const config = {formatter: 'verbose'}
    return gulp.src(['src/**/*.ts'])
        .pipe(tslint(config))
        .pipe(tslint.report({
            reportLimit: 5
        }))
})

// COPY FILES
gulp.task('copy-files', () => {
    const COPY_FILES = ['package.json']
    return gulp.src(COPY_FILES)
        .pipe(gulp.dest('dist'))
})

// BUILD DEFAULT
gulp.task('build', gulp.series(['ts-lint', 'copy-files'], function compiler() {
        const tsProject = ts.createProject(
            'tsconfig.json',
            {typescript: require('typescript')}
        )
        return tsProject.src()
            .pipe(tsProject())
            .js.pipe(gulp.dest('dist'))
            .on('error', (err) => {
                console.error('Build error:', err.message)
                // process.exit(1)
            })
    }
))

// WATCH
gulp.task('watch', (done) => {
    gulp.watch('src/**/*.ts', gulp.series('build'));
    nodemon({
        script: 'dist/server.js',
        ext: 'js json',
        watch: ['dist'], // Monitora a pasta 'dist' onde os arquivos JS compilados estão
        ignore: ['node_modules/', 'package.json', 'tsconfig.json']
    }).on('restart', () => {
        console.log('##################################### // ######################################')
        console.log('########################### (0/ Server restarted... ###########################')
    }).on('crash', function () {
        console.error('Application has crashed!')
    })
    done()
})

// BUILD DEV
gulp.task('dev', gulp.series(['build', 'watch']))