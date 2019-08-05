"user strict";

module.exports = app => {
  class UserController extends app.Controller {
    async index() {
      const user = await this.service.user.findAll();
      await this.ctx.render("user", { user });
    }
  }
  return UserController;
};
