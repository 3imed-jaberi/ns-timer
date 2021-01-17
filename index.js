/*!
 * ns-timer
 *
 * Copyright(c) 2021 Imed Jaberi
 * MIT Licensed
 */

'use strict'

/**
 * Nanoseconds timer for Node.js.
 *
 * @api public
 */
class Timer {
  constructor () {
    this.started = []
    this.stopped = []
  }

  // starts a timer.
  start () {
    if (this.started.length > 0) {
      throw new Error('Timer has been started.')
    }

    this.started = process.hrtime()

    return this
  }

  // stops a timer.
  stop () {
    if (this.started.length === 0) {
      throw new Error('Timer has not been started.')
    }

    if (this.stopped.length > 0) {
      throw new Error('Timer has been stopped.')
    }

    this.stopped = process.hrtime(this.started)

    return this
  }

  // the diff nanoseconds between start & stop.
  diff () {
    if (this.stopped.length === 0) {
      throw new Error('Timer has not been stopped.')
    }

    return this.stopped[0] * 1e9 + this.stopped[1]
  }
}

/**
 * Expose `Timer`.
 */

module.exports = Timer
