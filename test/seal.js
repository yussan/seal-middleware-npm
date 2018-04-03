/**
 * @author Yusuf A.H.
 * @email yussandeveloper@gmail.com
 * @create date 2018-03-27 10:50:08
 * @modify date 2018-03-27 10:50:08
 * @desc [description]
*/
import Seal from '../src'
// seal will valid in next 500ms
const SealClass = new Seal('my-app-key-123456', 500)
const seal = SealClass.generateSeal()

describe('seal test', () => {
  it('will passed', (done) => {
    if(SealClass.validate(seal).is_valid) done()
  })
  
  it('will failed, because limit is 1 seconds', (done) => {
    setTimeout(() => {
      if(SealClass.validate(seal).is_valid === false) done() 
    }, 500)
  })
})
