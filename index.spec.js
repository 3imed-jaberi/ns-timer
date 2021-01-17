const assert = require('assert')
const Timer = require('.')

describe('Timer', () => {
  it('start method', () => {
    const timer = new Timer()
    assert.strictEqual(timer.started.length, 0)
    assert.strictEqual(timer.stopped.length, 0)
    timer.start()
    assert.notStrictEqual(timer.started.length, 0)
    assert.strictEqual(timer.stopped.length, 0)
    assert.throws(() => { timer.start() })
  })

  it('stop method', () => {
    const timer = new Timer()
    assert.throws(() => { timer.stop() })
    timer.start().stop()
    assert.notStrictEqual(timer.started.length, 0)
    assert.notStrictEqual(timer.started.length, 0)
    assert.throws(() => { timer.stop() })
  })

  it('diff method', () => {
    const timer = new Timer()
    assert.throws(() => { timer.diff() })
    timer.start().stop()
    assert.strictEqual(typeof timer.diff(), 'number')
  })
})
