class ValidateBase {
  constructor(rules) {
    this.errMsg = "";
    this.rules = rules;
  }

  init() {
    return this.parseRules().isValidate();
  }

  parseRules() {
    if (!this.rules.length) return false;
    for (const rule of this.rules) {
      const err = this.createErrMsg(rule);
      if (!err) break;
    }
    return this;
  }

  createErrMsg(rule) {
    let flag = true;
    for (const vItem of this.vItems) {
      let _flag = this[vItem](rule);
      if (_flag === false) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  isValidate() {
    return this.errMsg ? { msg: this.errMsg } : false;
  }
}

class Validate extends ValidateBase {
  constructor(rules) {
    super(rules);
    this.vItems = ["isRequired", "isRegExp"];
  }

  isRequired() {
    // 判断传入的值是否为空
    const { _v, required } = arguments[0];
    if (required && required[0] && (_v === undefined || _v.trim() === "")) {
      this.errMsg = required[1];
      return false;
    }
  }

  isRegExp() {
    // 判断是否通过正则校验
    const { _v, regExp } = arguments[0];
    if (regExp && !regExp[0].test(_v)) {
      this.errMsg = regExp[1];
      return false;
    }
  }
}

class PlusValidate extends Validate {
  constructor(rules) {
    super(rules);
    this.vItems = this.vItems.concat(["isPwsAgain"]);
  }

  isPwsAgain() {
    // 判断两次输入的密码是否相同
    const { _v, password } = arguments[0];
    if (password && password[0] !== _v) {
      this.errMsg = password[1];
      return false;
    }
  }
}

module.exports = {
  validate(rules) {
    return new Validate(rules).init();
  },
  pValidate(rules) {
    return new PlusValidate(rules).init();
  }
};
