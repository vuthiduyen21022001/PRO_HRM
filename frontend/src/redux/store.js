import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import departmentSlice from "./departmentSlice";
import employeeSlice from "./employeeSlice";
import salarySlice from "./salarySlice";
import positionSlice from "./positionSlice";
export const store = configureStore({
  reducer: {
    userSlice,
    departmentSlice,
    employeeSlice,
    salarySlice,
    positionSlice,
  },
  devTools: true,
});
