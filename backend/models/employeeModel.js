import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      // enum: ["Nam", "Nữ"],
    },
    date_of_birth: {
      type: String,
      // required: true,
    },
    join_date: {
      type: String,
      // required: true,
    },
    department_id: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Department", // Tham chiếu đến model Department
    },
    position_id: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Position", // Tham chiếu đến model Position
    },
    salary_id: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Salari", // Tham chiếu đến model Salary
    },
  },
  {timestamps: true}
);
export const employeeModel = mongoose.model("Employee", employeeSchema);
