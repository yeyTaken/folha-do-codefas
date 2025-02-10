import consola from "consola";
import mongoose from "mongoose";
import("dotenv/config");

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) return true;

  try {
    await mongoose.connect(
        "mongodb+srv://rabi:cW3yN3BEGvZ0fljL@cluster0.tpw7e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
          dbName: "CODEFAS",
          connectTimeoutMS: 60000,
        }
      );

      consola.success("Connected to MongoDB!");
  } catch (error) {
    consola.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongo;