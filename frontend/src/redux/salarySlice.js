import {createSlice} from "@reduxjs/toolkit";
import {localStorageServ} from "../services/localStorage.service";

const initialState = {
  salaries: {
    allSalary: localStorageServ.salary.get() || null,
    isFetching: false,
    error: false,
  },
  addSalary: {
    currentUser: null,
    error: false,
    success: false,
  },
  updateSalary: {
    salary: 1000,
    bonus: 1000,
    deduction: 1000,
    tax:1000,
    totalSalary:1000,
    pending: false,
    error: false,
  },
};

export const salarySlice = createSlice({
  name: "salarySlice",
  initialState,
  reducers: {
    getSalaryStart: (state) => {
      state.salaries.isFetching = true;
    },
    getSalarySuccess: (state, action) => {
      state.salaries.isFetching = false;
      state.salaries.allSalary = action.payload;
    },
    getSalaryFailed: (state) => {
      state.salaries.isFetching = false;
      state.salaries.error = true;
    },
    salaryStart: (state) => {
      state.addSalary.isFetching = true;
    },
    salarySuccess: (state) => {
      state.addSalary.isFetching = false;
      state.addSalary.error = false;
      state.addSalary.success = true;
    },
    salaryFailed: (state) => {
      state.addSalary.isFetching = false;
      state.addSalary.error = true;
      state.addSalary.success = false;
    },
    updateStart: (state) => {
      state.updateSalary.pending = true;
    },
    updateError: (state) => {
      state.updateSalary.pending = false;
      state.updateSalary.error = true;
    },
    updateSuccess: (state, action) => {
      state.updateSalary.pending = false;
      state.updateSalary.error = false;
      state.updateSalary.salary = action.payload.salary;
      state.updateSalary.bonus = action.payload.bonus;
      state.updateSalary.deduction = action.payload.deduction;
      state.updateSalary.tax = action.payload.tax;
      state.updateSalary.totalSalary = action.payload.totalSalary;
    },
  },
});

export const {
  getSalaryStart,
  getSalarySuccess,
  getSalaryFailed,
  salaryStart,
  salarySuccess,
  salaryFailed,
  updateStart,
  updateError,
  updateSuccess,
} = salarySlice.actions;
export default salarySlice.reducer;
