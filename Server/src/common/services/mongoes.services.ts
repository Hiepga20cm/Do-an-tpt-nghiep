import mongoose from "mongoose";

class MongooseService {
  private count = 0;
  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  };

  constructor() {
    this.connectWithRetry();
  }

  getMongoose() {
    return mongoose;
  }
  //mongodb://localhost:27017/test
  //mongodb+srv://admin:f7M6AjnGt6wn3rMx@cluster0.y1gpopp.mongodb.net/BlueCyber
  connectWithRetry = () => {
    console.log("Attempting MongoDB connection (will retry if needed)");
    mongoose
      .connect(
        "mongodb+srv://admin:f7M6AjnGt6wn3rMx@cluster0.y1gpopp.mongodb.net/BlueCyber",
        this.mongooseOptions
      )
      .then(() => {
        console.log("MongoDB is connected");
      })
      .catch((err) => {
        const retrySeconds = 5;
        console.log(
          `MongoDB connection unsuccessful (will retry #${++this
            .count} after ${retrySeconds} seconds):`,
          err
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
      });
  };
}
export default new MongooseService();
