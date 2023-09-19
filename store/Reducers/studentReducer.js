import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allStudent:null,
  student: null,
  jobs: null,
  internships: null,
  errors: [1],
  isAuthenticated: false,
  otp:null
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addAllStudent: (state, action) => {
      state.allStudent = action.payload;
    },
    addStudent: (state, action) => {
      state.student = action.payload;
      state.isAuthenticated = true;
    },
    removeStudent: (state, action) => {
      state.student = null;
      state.isAuthenticated = false;
    },
    resetErrors: (state) => {
      state.errors = [];
    },
    addError: (state, action) => {
      state.errors.push(action.payload);
    },
    removeError: (state, action) => {
      state.errors = [];
    },
    addJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addInternship: (state, action) => {
      state.internships = action.payload;
    },
    addOTP:(state, action)=>{
      state.otp = action.payload;
    },
    removeOTP:(state , action)=>{
      state.otp = action.payload
    }
  },
});

export const {
  addAllStudent,
  addStudent,
  removeStudent,
  addError,
  removeError,
  addJobs,
  addInternship,
  addOTP,
  removeOTP
} = studentSlice.actions;

export default studentSlice.reducer;
