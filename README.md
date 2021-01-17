# ns-timer
---

[![Build Status][travis-img]][travis-url]
[![Coverage Status][coverage-img]][coverage-url]
[![NPM version][npm-badge]][npm-url]
[![License][license-badge]][license-url]
![Code Size][code-size-badge]

<!-- ***************** -->

[travis-img]: https://travis-ci.org/3imed-jaberi/ns-timer.svg?branch=master
[travis-url]: https://travis-ci.org/3imed-jaberi/ns-timer
[coverage-img]: https://coveralls.io/repos/github/3imed-jaberi/ns-timer/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/3imed-jaberi/ns-timer?branch=master
[npm-badge]: https://img.shields.io/npm/v/ns-timer.svg?style=flat
[npm-url]: https://www.npmjs.com/package/ns-timer
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: https://github.com/3imed-jaberi/ns-timer/blob/master/LICENSE
[code-size-badge]: https://img.shields.io/github/languages/code-size/3imed-jaberi/ns-timer

<!-- ***************** -->

Nanoseconds timer for Node.js.


## `Installation`

```bash
# npm
$ npm install ns-timer
# yarn
$ yarn add ns-timer
```


## `Usage`

This is a practical example of how to use.

```javascript
const Timer = require('ns-timer')
const timer = new Timer().start()

setTimeout(() => { 
  console.log(timer.stop().diff())
}, 1000)
```


#### License
---

[MIT](LICENSE) &copy;	[Imed Jaberi](https://github.com/3imed-jaberi)
