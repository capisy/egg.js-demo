module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    tel: {
      type: Number,
      required: true,
      validate: v => /^[01]\d{10}$/.test(v)
    }
  });

  return mongoose.model("User", UserSchema, "user");
};
