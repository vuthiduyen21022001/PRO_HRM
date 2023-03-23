import {createSlice} from "@reduxjs/toolkit";
import {localStorageServ} from "../services/localStorage.service";

const initialState = {
  employees: {
    allEmployee: localStorageServ.employee.get() || null,
    isFetching: false,
    error: false,
  },
  postEmployee: {
    currentUser: null,
    error: false,
    success: false,
  },
  update: {
    name: "",
    description: "",
    pending: false,
    error: false,
  },
  msg: "",
};

export const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {
    postEmployeeStart: (state) => {
      state.postEmployee.isFetching = true;
    },
    postEmployeeSuccess: (state) => {
      state.postEmployee.isFetching = false;
      state.postEmployee.error = false;
      state.postEmployee.success = true;
    },
    postEmployeeFailed: (state) => {
      state.postEmployee.isFetching = false;
      state.postEmployee.error = true;
      state.postEmployee.success = false;
    },
    getEmployeeStart: (state) => {
      state.employees.isFetching = true;
    },
    getEmployeeSuccess: (state, action) => {
      state.employees.isFetching = false;
      state.employees.allEmployee = action.payload;
    },
    getEmployeeFailed: (state) => {
      state.employees.isFetching = false;
      state.employees.error = true;
    },
    deleteEmployeeStart: (state) => {
      state.employees.isFetching = true;
    },
    deleteEmployeeSuccess: (state, action) => {
      state.employees.isFetching = false;
      state.msg = action.payload;
    },
    deleteEmployeeFailed: (state, action) => {
      state.employees.isFetching = false;
      state.employees.error = true;
      state.msg = action.payload;
    },
    updateStart: (state) => {
      state.update.pending = true;
    },
    updateError: (state) => {
      state.update.pending = false;
      state.update.error = true;
    },
    updateSuccess: (state, action) => {
      state.update.pending = false;
      state.update.error = false;
    },
  },
});

export const {
  postEmployeeStart,
  postEmployeeSuccess,
  postEmployeeFailed,
  getEmployeeStart,
  getEmployeeSuccess,
  getEmployeeFailed,
  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeFailed,
  updateStart,
  updateSuccess,
  updateFailure,
} = employeeSlice.actions;
export default employeeSlice.reducer;
