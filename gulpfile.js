const gulp = require('gulp'),
    babel = require('gulp-babel'),
    del = require('del'),
    rollup = require('gulp-rollup')
    replace = require('rollup-plugin-replace'),
    gulpSequence = require('gulp-sequence');

const paths = {
    scripts: ['./src/server/**/*.js'],
    output: './dist/server/'
};

// 初始删除目录
gulp.task('clean', () => {
    return del(paths.output);
});

// 编译开发发环境
gulp.task('buildDev', () => {
    return gulp.src(paths.scripts)
        .pipe(babel({
            babelrc: false,
            plugins: ['transform-es2015-modules-commonjs']
        }))
        .pipe(gulp.dest(paths.output));
});

// 编译生产发环境
gulp.task('buildProd', ['clean'], () => {
    return gulp.src(paths.scripts)
        .pipe(babel({
            babelrc: false,
            ignore: ['./src/server/config/index.js'],
            plugins: ['transform-es2015-modules-commonjs']
        }))
        .pipe(gulp.dest(paths.output));
});

// Tree Shaking
// 这个任务需要放在 buildProd task 之后进行； 如果是之前执行会把 Tree Shaking 的文件进行覆盖
// rollup 本身就可以对ES6语法进行编译，所以再 buildProd 阶段就要阻止对 config 文件进行编译
gulp.task('buildConfig', function() {
    gulp.src(paths.scripts)
      .pipe(rollup({
        input: './src/server/config/index.js',
        output: {
            format: 'cjs' // commonjs
        },
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
      }))
      .pipe(gulp.dest(paths.output));
});

// 监听文件是否有改动
gulp.task('watch', () => {
    gulp.watch(paths.scripts, ['buildDev']);
});

// 任务执行队列
let _taskList = ['watch', 'buildDev']; // 默认 development 环境

// 如果是生成环境，切换 task List
if (process.env.NODE_ENV == 'production') {
    // task 任务执行是异步的，为了保证执行顺序使用 gulp sequ队列进行管理
    _taskList = gulpSequence('buildProd', 'buildConfig');
}

gulp.task('default', _taskList);
