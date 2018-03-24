/**
 * @author Yusuf A.H.
 * @email yussandeveloper@gmail.com
 * @create date 2018-03-23 11:14:10
 * @modify date 2018-03-23 11:14:10
 * @desc [description]
*/


export default class Seal {
  /**
   * class of seal-middleware
   * @param key {String}, your app key 
   * @param expired {Number}, expired in miliseconds (detaullt 1 hour)
   */
  constructor({key = 'security', expired = 3600000}) {
    this.key = key
    this.expired = expired
  }

  /**
   * function to generate seal 
   * @return {String}
   */
  generateSeal() {
    if(typeof window == 'undefined') {
      return Buffer.from(this.key + String(Date.now())).toString('base64')
    } else {
      return (btoa(this.key + String(Date.now()))).replace(/=/g, '')
    }
  }

  getTimestampSeal() {
    if(typeof window == 'undefined') {
      // browser
      return (Buffer.from( seal, 'base64').toString()).replace(this.key, '')
    } else {
      // nodejs
      return atob(`${seal}==`).replace(this.key, '')
    }
  }

  /**
   * function to validate seal 
   * @param {String} seal
   * @return {String}
   */
  validate(seal){
    const diff = Date.now() - getTimestampSeal(seal)
    if(isNaN(diff) || diff >= this.expired)
      return { is_valid: false }
    else
      return { is_valid: true }
  }
}