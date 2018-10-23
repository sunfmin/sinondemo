// a.js

var b = require('b');

function testMe(num) {
  return {
    x: a1(num),
    y: b.b1(num),
  }
}

function a1(num) {
  return 2 * num;
}

module.exports = {
  test: test
};
