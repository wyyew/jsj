/* eslint-disable */
if(process.env.NODE_DEV === 'production') {
  require('../build/api/api');
}else {
  require('babel-register');
  require('../src/api/api')
}
