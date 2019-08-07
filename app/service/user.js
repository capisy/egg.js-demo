module.exports = app => {
  class UserService extends app.Service {
    async add() {
      const { name, tel } = this.ctx.request.body;
      const { User } = this.ctx.model;
      try {
        return await User.create({ name, tel });
      } catch ({ code, errmsg }) {
        return {
          code,
          errmsg
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
