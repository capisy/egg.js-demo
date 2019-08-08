##### 验证文档

```
const validate = require("../utils/validate");
const { SUCCESS, ERROR, SYSTEM_ERROR } = require("../utils/interfaceCode");
```

```
 const errValidate = validate([
  {
    _v: name,
    required: [true, "名字不能为空"],
    regExp: [/^\w{2,10}$/i, "名字必须为2-10个英文字符"]
  },
  {
    _v: tel,
    required: [true, "电话号码不能为空"],
    regExp: [/^[01]\d{10}$/, "电话号码格式不正确"]
  },
  {
    _v: psw,
    required: [true, "密码不为空"],
    regExp: [/^\w{2,5}$/i, "密码为2-5位"]
  },
  {
    _v: pswagain,
    required: [true, "再次输入密码为空"],
    password: [psw, "两次输入的密码不同"]
  }
]);
```

```
if (errValidate) {
  return {
    ...errValidate,
    ...ERROR
  };
}
```
