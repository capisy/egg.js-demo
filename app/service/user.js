const validate = require("../utils/validate");
const { SUCCESS, ERROR, SYSTEM_ERROR } = require("../utils/interfaceCode");

module.exports = app => {
  class UserService extends app.Service {
    async add() {
      const { name, tel, psw, pswagain } = this.ctx.request.body;
      const { User } = this.ctx.model;

      const errValidate = validate([
        {
          _v: name,
          required: [true, "名字不能为空"]
        },
        {
          _v: tel,
          required: [true, "电话号码不能为空"],
          regExp: [/^[01]\d{10}$/, "电话号码格式不正确"]
        }
      ]);

      if (errValidate) {
        return {
          ...errValidate,
          ...ERROR
        };
      }

      try {
        const _user = await User.create({ name, tel });
        return {
          name: _user.name,
          tel: _user.tel,
          ...SUCCESS
        };
      } catch (err) {
        return {
          msg: err.errmsg,
          ...SYSTEM_ERROR
        };
      }
    }

    async findAll() {
      return await this.ctx.model.User.find(
        {},
        { _id: 0, name: 1, tel: 1 }
      ).sort({
        name: -1
      });
    }
  }
  return UserService;
};
