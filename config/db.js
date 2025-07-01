import mongoose from "mongoose";

let caches = global.mongoose;

if (!caches) {
  caches = global.mongoose = { conn: null, Promise: null };
}

async function connectDB() {
  if (caches.conn) {
    return caches.conn;
  }
  if (caches.Promise) {
    const opts = {
      bufferCommants: false,
    };
    caches.Promise = mongoose
      .connect(`${process.env.MONGODB_URI}/quickcart`, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  caches.conn = await caches.Promise;
  return caches.conn;
}
export default connectDB;
