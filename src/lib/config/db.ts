import mongoose from "mongoose";

export const connectDB = () =>
  mongoose
    .connect(
      "mongodb+srv://umairjaffar:umair%40123@mongoosecluster.s2mlc.mongodb.net/next_blog_site?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));
