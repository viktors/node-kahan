// Run $ expresso

var assert = require('assert'),
    kahan = require('../index.js')

var testArray = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7]

module.exports = 
  { 'test naive summation': function() { assert.equal(15.299999999999999, testArray.reduce(function(a, b) { return a + b })) }
  , 'test Kahan summation': function() { assert.equal(15.3, kahan.sum(testArray)) }
  }
