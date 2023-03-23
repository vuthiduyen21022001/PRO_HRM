import {createSlice} from "@reduxjs/toolkit";
import {localStorageServ} from "../services/localStorage.service";

const initialState = {
  departments: {
    allDepartments: localStorageServ.deparment.get() || null,
    isFetching: false,
    error: false,
  },
  postDepartment: {
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

export const departmentSlice = createSlice({
  name: "departmentSlice",
  initialState,
  reducers: {
    getDepartmentStart: (state) => {
      state.departments.isFetching = true;
    },
    getDepartmentSuccess: (state, action) => {
      state.departments.isFetching = false;
      state.departments.allDepartments = action.payload;
    },
    getDepartmentFailed: (state) => {
      state.departments.isFetching = false;
      state.departments.error = true;
    },
    postDepartmentStart: (state) => {
      state.postDepartment.isFetching = true;
    },
    postDepartmentSuccess: (state) => {
      state.postDepartment.isFetching = false;
      state.postDepartment.error = false;
      state.postDepartment.success = true;
    },
    postDepartmentFailed: (state) => {
      state.postDepartment.isFetching = false;
      state.postDepartment.error = true;
      state.postDepartment.success = false;
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
      state.update.name = action.payload.name;
      state.update.description = action.payload.description;
    },
    deleteDepartmentStart: (state) => {
      state.departments.isFetching = true;
    },
    deleteDepartmentSuccess: (state, action) => {
      state.departments.isFetching = false;
      state.msg = action.payload;
    },
    deleteDepartmentFailed: (state, action) => {
      state.departments.isFetching = false;
      state.departments.error = true;
      state.msg = action.payload;
    },
  },
});

export const {
  getDepartmentStart,
  getDepartmentSuccess,
  getDepartmentFailed,
  postDepartmentStart,
  postDepartmentSuccess,
  postDepartmentFailed,
  updateStart,
  updateError,
  updateSuccess,
  deleteDepartmentStart,
  deleteDepartmentSuccess,
  deleteDepartmentFailed,
} = departmentSlice.actions;
export default departmentSlice.reducer;
