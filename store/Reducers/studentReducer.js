import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
  jobs: null,
  internships: null,
  errors: [],
  isAuthenticated: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.student = action.payload;
      state.isAuthenticated = true;
    },
    removeStudent: (state, action) => {
      state.student = null;
      state.isAuthenticated = false;
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
  },
});

export const {
  addStudent,
  removeStudent,
  addError,
  removeError,
  addJobs,
  addInternship,
} = studentSlice.actions;

export default studentSlice.reducer;
