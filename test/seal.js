import Seal from '../src'
// test validation in 2 seconds
const seal = new Seal('my-app-key-123456', 2000)

it('will passed', (done) => {
  done()
})

it('will failed, because limit is 2 seconds', (done) => {
  done()
})