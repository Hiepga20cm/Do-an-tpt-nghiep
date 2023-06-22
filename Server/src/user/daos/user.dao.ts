import mongooseServices from "../../common/services/mongoes.services";
import jwt from "jsonwebtoken";
class UsersDao {
  Schema = mongooseServices.getMongoose().Schema;
  userSchema = new this.Schema(
    {
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      avatar: { type: String, required: true, default: "none" },
      name: { type: String, required: true },
      authGoogle: { type: String },
      authFacebook: { type: String },
      authType: {
        type: String,
        enum: ["local", "google", "facebook"],
        default: "local",
      },
      gender: { type: String, default: "Male" },
      story: {
        type: String,
        default: "",
        maxlength: 200,
      },
      publicKey: { type: String, required: true },
    },
    { timestamps: true }
  );
  User = mongooseServices.getMongoose().model("Users", this.userSchema);
  constructor() {
    console.log("Created new instance of UsersDao");
  }
}
