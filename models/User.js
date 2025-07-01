import mongoose, { Types } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    cartItem: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);

const User = mongoose.models.user || mongoose.models("User", userSchema);

export default User;
