module.exports = app => {
  class UserService extends app.Service {
    async add() {
      const { name, tel } = this.ctx.query;
      const { User } = this.ctx.model;
      let user = await User.findOne({ name });
      if (!user) {
        user = await User.create({ name, tel });
      }
      return user;
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
