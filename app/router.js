"use strict";

module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/query/:id?", controller.home.queryTest);
  router.get("/user", controller.user.index);
};
