"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  ejs: {
    enable: true,
    package: "egg-view-ejs"
  },
  sequelize: {
    enable: false,
    package: "egg-sequelize"
  },
  mongoose: {
    enable: true,
    package: "egg-mongoose"
  }
};
