'use strict';

var lodash = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var lodash__default = /*#__PURE__*/_interopDefaultLegacy(lodash);

var foo = 'hello rollup --zou';

function main () {
  console.log(foo);
  console.log(lodash__default['default'].add(1, 2));
}

module.exports = main;
