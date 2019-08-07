class Validate {
  constructor(rules) {
    this.errMsg = "";
    this.rules = rules;
    this.parseRules();
  }
  parseRules() {
    if (!this.rules.length) return "mdzz";
    for (const item of this.rules) {
      const err = this.createErrMsg(item);
      if (!err) break;
    }
  }
  createErrMsg(rule) {
    const { val, required, regExp } = rule;
    // 验证不为空
    if (required && required[0] && (val === undefined || val.trim() === "")) {
      this.errMsg = required[1];
      return false;
    }
    // 正则验证
    if (regExp && !regExp[0].test(val)) {
      this.errMsg = regExp[1];
      return false;
    }
    return true;
  }
  isValidate() {
    return this.errMsg ? { msg: this.errMsg } : false;
  }
}

module.exports = rules => {
  return new Validate(rules).isValidate();
};
