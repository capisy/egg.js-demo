"use strict";

module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/query/:id?", controller.home.queryTest);
  router.post("/user-add", controller.user.add);
  // router.get("/user-add", controller.user.add);
  router.get("/user", controller.user.user);
};
