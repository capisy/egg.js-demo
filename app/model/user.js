module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: {
      type: String,
      required: [true, "Name required !"],
      unique: true
    },
    tel: {
      type: Number,
      required: [true, "Phone number required !"],
      validate: {
        validator: v => /[01]\d{10}/.test(v),
        message: props => `${props.value} is not a valid phone number !`
      }
    }
  });

  // const UserSchema = new Schema({
  //   name: String,
  //   tel: Number
  // });

  return mongoose.model("User", UserSchema, "user");
};
