const { validate } = require("../utils/validate");
const { SUCCESS, ERROR, SYSTEM_ERROR } = require("../utils/interfaceCode");

module.exports = app => {
  class UserService extends app.Service {
    async add() {
      const { name, tel } = this.ctx.request.body;
      const { User } = this.ctx.model;

      try {
        /**
         * 添加操作的两种方法
         * 1.实例化model类，调用save()
         * 2.直接调用create()
         */

        // const _user = new User({ name, tel });
        // await _user.save();

        const _user = await User.create({ name, tel });

        return {
          name: _user.name,
          tel: _user.tel,
          ...SUCCESS
        };
      } catch (err) {
        return {
          msg: err,
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
