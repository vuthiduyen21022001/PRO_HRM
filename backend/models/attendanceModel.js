const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
  employee_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Employee", // Tham chiếu đến model Employee
  },
  check_in_time: {
    type: Date,
    required: true,
  },
  check_out_time: {
    type: Date,
    required: true,
  },
  working_hours: {
    type: Number,
    required: true,
  },
  work_date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
