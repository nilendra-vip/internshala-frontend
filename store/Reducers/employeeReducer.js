import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: null,
  jobs: null,
  internships: null,
  errors: [],
  isAuthenticated: false,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isAuthenticated = true;
    },
    removeEmployee: (state, action) => {
      state.employee = null;
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
  addEmployee,
  removeEmployee,
  addError,
  removeError,
  addJobs,
  addInternship,
} = employeeSlice.actions;

export default employeeSlice.reducer;
