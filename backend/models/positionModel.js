import mongoose from "mongoose";
const PositionSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
      // unique: true,
    },
    description: {
      type: "string",
      required: true,
      // unique: true,
    },
    salary: {
      type: "number",
      // required: true,
      // unique: true,
    },
  },
  {timestamps: true}
);

export const PositionModel = mongoose.model("Position", PositionSchema);
