### json Web Token规范.md

概念：令牌的具体定义方式

规定： 令牌有三部分构成 “头” “载荷” “签名”

头： 包含加密算法，令牌类型信息

载荷： 包括用户信息 签发时间喝过期时间

签名： 根据头 载荷以及密匙得到的哈西串


```js
const jwt = require('json-web-token')
const secret = 'this is secret'
// 生成密钥jwt
const token = jwt.sign(
  {
    data: {name: 'steven'},
    exp: Math.floor(Date.now() / 1000) + 60 * 60 // 设置过期时间
  },
  secret
)

```