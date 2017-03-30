/* eslint-disable */
var path = require('path')
var rootDir = path.resolve(__dirname, '..')

var WebpackIsomorphicTools = require('webpack-isomorphic-tools')

global.__SERVER__ = true
global.__DISABLE_SSR__ = false

if(process.env.NODE_DEV === 'production') {
  global.webpackIsomorphicTools = new WebpackIsomorphicTools(
    require('../build/webpack-isomorphic-tools'))
    .server(rootDir, function() {
      require('../build/server');
    });
}
else {
  require('babel-register');
  global.webpackIsomorphicTools = new WebpackIsomorphicTools(
    require('../build/webpack-isomorphic-tools'))
    .development()
    .server(rootDir, function() {
      require('../src/server')
    })
}
