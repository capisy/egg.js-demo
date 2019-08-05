/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1564104436095_6573";

  // add your middleware config here
  // config.middleware = ["printdate"];
  // config.printdate = {
  //   tip: "当前日期:"
  // };

  // cookie
  config.keys = "afasdfasfasfasfsafsa";

  // session
  config.session = {
    maxAge: 2 * 3600 * 1000,
    httpOnly: true,
    encrypt: true,
    renew: true
  };

  // 模板引擎
  config.view = {
    mapping: { ".html": "ejs" }
  };

  // msyql连接
  config.sequelize = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    database: "mf_egg",
    username: "root",
    password: "123456"
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
