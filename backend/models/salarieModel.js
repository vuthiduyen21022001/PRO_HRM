import mongoose from "mongoose";
const SalarySchema = new mongoose.Schema(
  {
    salary: {
      type: "number",
      required: true,
    },
    bonus: {
      type: "number",
      required: true,
    },
    deduction: {
      type: "number",
      required: true,
    },
    tax: {
      type: 'number',
      required: true,
    },
    total_salary: {
      type: 'number',
      // required: true,
    },

  },
  { timestamps: true }
);

export const SalaryModel = mongoose.model("Salari", SalarySchema);
