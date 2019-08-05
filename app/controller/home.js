"use strict";

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      this.ctx.body = "hello egg";
    }
    async queryTest() {
      const { id } = this.ctx.params;
      const { user } = this.ctx.query;
      this.ctx.body = `id:${id},用户名:${user}`;
    }
  }
  return HomeController;
};
