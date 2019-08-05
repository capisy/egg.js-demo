module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define(
    "user",
    {
      userId: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userName: STRING(50),
      age: INTEGER,
      password: STRING(32)
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  return User;
};
