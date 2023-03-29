import {createSlice} from "@reduxjs/toolkit";
import {localStorageServ} from "../services/localStorage.service";

const initialState = {
  userList: [],
  user: localStorageServ.user.get() || null,
  login: {
    currentUser: localStorageServ.user.get() || null,
    isFetching: false,
    error: false,
  },
  register: {
    currentUser: null,
    error: false,
    success: false,
  },
  postUser: {
    isFetching: false,
    error: false,
    success: false,
  },
  users: {
    allUser: null,
    isFetching: false,
    error: false,
  },
  userId: {
    oneUser: null,
    isFetching: false,
    error: false,
  },
  updateUser: {
    username: "",
    password: "",
    email: "",
    admin: "",
    employee_id: "",
    pending: false,
    error: false,
  },
  msg: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    postUserStart: (state) => {
      state.postUser.isFetching = true;
    },
    postUserSuccess: (state) => {
      state.postUser.isFetching = false;
      state.postUser.error = false;
      state.postUser.success = true;
    },
    postUserFailed: (state) => {
      state.postUser.isFetching = false;
      state.postUser.error = true;
      state.postUser.success = false;
    },
    updateStart: (state) => {
      state.updateUser.pending = true;
    },
    updateError: (state) => {
      state.updateUser.pending = false;
      state.updateUser.error = true;
    },
    updateSuccess: (state, action) => {
      state.updateUser.pending = false;
      state.updateUser.error = false;
      state.updateUser.username = action.payload.username;
      state.updateUser.password = action.payload.password;
      state.updateUser.email = action.payload.email;
      state.updateUser.admin = action.payload.admin; 
      state.updateUser.employee_id = action.payload.employee_id; 
    },
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
    getListUser: (state, {payload}) => {
      state.userList = payload;
    },
    setUserInfor: (state, {payload}) => {
      state.user = payload;
    },
    getUserStart: (state) => {
      state.users.isFetching = true;
    },
    getUserSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUser = action.payload;
    },
    getUserFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    getUserIdStart: (state) => {
      state.userId.isFetching = true;
    },
    getUserIdSuccess: (state, action) => {
      state.userId.isFetching = false;
      state.userId.oneUser = action.payload;
    },
    getUserIdFailed: (state) => {
      state.userId.isFetching = false;
      state.userId.error = true;
    },
  },
});

export const {
  postUserStart,
  postUserSuccess,
  postUserFailed,
  updateStart,
  updateSuccess,
  updateError,
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  getUserStart,
  getUserSuccess,
  getUserFailed,
  getUserIdStart,
  getUserIdSuccess,
  getUserIdFailed,
  getListUser,
  setUserInfor,
} = userSlice.actions;
export default userSlice.reducer;
