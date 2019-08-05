module.exports = app => {
  class UserService extends app.Service {
    async findAll() {
      return await this.ctx.model.User.findAll();
    }
  }
  return UserService;
};
