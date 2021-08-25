# ninja_next修复版
支持2.8.3版本青龙面板

注意自己修改`ql.js`中的端口和地址

只需要将本项目中的`ql.js`和`user.js`替换进`ninja/backend`就可以了

无法扫码，请打开user.js修改useragent.
```
const defaultUserAgent="Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16";
```
