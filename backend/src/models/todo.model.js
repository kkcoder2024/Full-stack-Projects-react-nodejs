import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },

    active: {
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model("Todo", todoSchema);
