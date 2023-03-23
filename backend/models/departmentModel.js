import mongoose from "mongoose";
const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  {timestamps: true}
);

export const DepartmentModel = mongoose.model("Department", departmentSchema);
