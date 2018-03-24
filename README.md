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
- https://github.com/yussan/seal-middleware
- https://www.npmjs.com/package/seal-middleware