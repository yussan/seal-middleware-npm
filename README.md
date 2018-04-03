[![travis](https://travis-ci.org/yussan/seal-middleware.svg?branch=master)](https://travis-ci.org/yussan/seal-middleware)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

![logo seal-middleware](https://user-images.githubusercontent.com/36233576/38233089-0d34f9fe-3722-11e8-8dcb-1be43ceaa859.png)

# seal-middleware
secure your api endpoint by limiting access over period of time.

## Instalation
using yarn or npm 
```
npm install seal-middleware
```

## How To Use
### Initial
Import and initial seal module, setup your app key and expired time of seal.
```
import Seal from 'seal-middleware`
const seal = new Seal('your app key', 5000)
```

### Available Commands 
- Generate seal 
  ```
  const myseal = seal.generateSeal()
  ```
- Seal validation
  ```
  const {is_valid} = seal.validate(grdasd65a6wudtwy786)
  ```

## Samples 
- Used on api endpoint 
  ```
  https://api.host.com/endpoint/:seal
  ```
  If seal expired, response from api is `request invalid` or `forbidden access`.

## Links 
- Github : https://github.com/yussan/seal-middleware
- NPM : https://www.npmjs.com/package/seal-middleware
- Posted in Utopian.io : https://utopian.io/utopian-io/@yussan/seal-middleware-secure-your-api-endpoint-by-limiting-access-over-period-of-time

## Contributors 
- [yussan](https://yussan.github.io) : JS Developer
- radudangratian : Logo creator
