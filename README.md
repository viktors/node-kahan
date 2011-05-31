Kahan summation algorithm for Node.js
=====================================

Since JavaScript's only numerical data type is Number, internally represented 
as floating-point number, calculating a sum of numbers can introduce significant 
numerical error. This library aims to reduce the error by employing
[Kahan's summation algorithm](http://en.wikipedia.org/wiki/Kahan_summation_algorithm).

Example
-------

```js
// Naive summation
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7].reduce(function(a, b) { return a + b })
// -> 15.299999999999999

// Kahan summation
require('kahan').sum([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7])
// -> 15.3
```
