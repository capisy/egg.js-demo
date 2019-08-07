"user strict";

module.exports = app => {
  class UserController extends app.Controller {
    async add() {
      const user = await this.service.user.add();
      this.ctx.body = user;
    }
    async user() {
      const users = await this.service.user.findAll();
      await this.ctx.render("user", { users });
    }
  }
  return UserController;
};
