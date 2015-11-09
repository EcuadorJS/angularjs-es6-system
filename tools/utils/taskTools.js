import gulp from 'gulp';
//Load plugins
import gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';

//Config load plugins
let plugins = gulpLoadPlugins({
    DEBUG: false,
    pattern: ['gulp-*', 'gulp.*'],
    config: 'package.json',
    scope: ['devDependencies'],
    replaceString: /^gulp(-|\.)/,
    camelize: true,
    lazy: true
});

export function task(taskName, option) {
  return require(join('..', 'tasks', taskName))(gulp, plugins(), option);
}
