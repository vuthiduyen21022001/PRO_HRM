import {createSlice} from "@reduxjs/toolkit";
import {localStorageServ} from "../services/localStorage.service";

const initialState = {
  positions: {
    allPosition: localStorageServ.position.get() || null,
    isFetching: false,
    error: false,
  },
  postPosition: {
    isFetching: false,
    error: false,
    success: false,
  },
  updatePosition: {
    name: "",
    description: "",
    salary: "",
    pending: false,
    error: false,
  },
  msg: "",
};

export const positionSlice = createSlice({
  name: "positionSlice",
  initialState,
  reducers: {
    getPositionStart: (state) => {
      state.positions.isFetching = true;
    },
    getPositionSuccess: (state, action) => {
      state.positions.isFetching = false;
      state.positions.allPosition = action.payload;
    },
    getPositionFailed: (state) => {
      state.positions.isFetching = false;
      state.positions.error = true;
    },
    postPositionStart: (state) => {
      state.postPosition.isFetching = true;
    },
    postPositionSuccess: (state) => {
      state.postPosition.isFetching = false;
      state.postPosition.error = false;
      state.postPosition.success = true;
    },
    postPositionFailed: (state) => {
      state.postPosition.isFetching = false;
      state.postPosition.error = true;
      state.postPosition.success = false;
    },
    updateStart: (state) => {
      state.updatePosition.pending = true;
    },
    updateError: (state) => {
      state.updatePosition.pending = false;
      state.updatePosition.error = true;
    },
    updateSuccess: (state, action) => {
      state.updatePosition.pending = false;
      state.updatePosition.error = false;
      state.updatePosition.name = action.payload.name;
      state.updatePosition.description = action.payload.description;
      state.updatePosition.salary = action.payload.salary;
    },
    deletePositiontStart: (state) => {
      state.positionts.isFetching = true;
    },
    deletePositiontSuccess: (state, action) => {
      state.positionts.isFetching = false;
      state.msg = action.payload;
    },
    deletePositiontFailed: (state, action) => {
      state.positionts.isFetching = false;
      state.positionts.error = true;
      state.msg = action.payload;
    },
  },
});

export const {
  getPositionStart,
  getPositionSuccess,
  getPositionFailed,
  postPositionStart,
  postPositionSuccess,
  postPositionFailed,
  updateStart,
  updateSuccess,
  updateFailed,
  de,
} = positionSlice.actions;
export default positionSlice.reducer;
