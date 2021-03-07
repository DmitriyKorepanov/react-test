/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
require('@babel/polyfill');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
