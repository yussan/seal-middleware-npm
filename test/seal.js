import Seal from '../src'
const SealClass = new Seal('my-app-key-123456', 10)
const seal = SealClass.generateSeal()

describe('seal test', () => {
  it('will passed', (done) => {
    if(SealClass.validate(seal).is_valid) done()
  })
  
  it('will failed, because limit is 1 seconds', (done) => {
    return new Promise(resolve => {
      if(!SealClass.validate(seal).is_valid) done()
    })
  }).timeout(1000)
})
