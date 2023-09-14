"use client";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import {
  addEmployee,
  removeEmployee,
  addError,
  removeError,
  addJobs,
  addInternship,
} from "../Reducers/employeeReducer";

// For current employee 
export const asyncCurrentEmployee = () => async (dispatch, getState) => {
  const { data } = await axios.get("/employee/current");
  // console.log(data)
  if(!data.message){
    dispatch(addEmployee(data.employee));
  }
  else{
    dispatch(addError(data.message));
  }
};

// For employee signup
export const asyncEmployeeSignup = (employee) => async (dispatch, getState) => {
  const { data } = await axios.post("/employee/signup", employee);
  // console.log(data)
  if(!data.message){
    dispatch(asyncCurrentEmployee());
  }
  else{
    dispatch(addError(data.message));
  }
};

// For employee signin
export const asyncEmployeeSignin = (employee) => async (dispatch, getState) => {
  const { data } = await axios.post("/employee/signin", employee);
  if(!data.message){
    dispatch(asyncCurrentEmployee());
  }
  else{
    dispatch(addError(data.message));
  }
};

//For employee Signout
export const asyncEmployeeSignout = (employee) => async (dispatch, getState) => {
  const { data } = await axios.get("/employee/signout");
  dispatch(removeEmployee());
};

// For employee profile Update
export const asyncEmployeeUpdate = (employee) => async (dispatch, getState) => {
  const { _id } = getState().employeeReducer.employee;
  const { data } = await axios.post("/employee/update/"+ _id ,employee);
  if(!data.message){
    dispatch(asyncCurrentEmployee());
  }
  else{
    dispatch(addError(data.message));
  }
};

// For employee Organization Logo update
export const asyncEmployeeOrganizationLogo = (orgLogo) => async (dispatch, getState) => {
  const { _id } = getState().employeeReducer.employee;
  const { data } = await axios.post("/employee/organization-logo/"+ _id , orgLogo);
  dispatch(asyncCurrentEmployee());
};

// For employee Password Update
export const asyncEmployeeUpdatePassword = (password) => async (dispatch, getState) => {
  const { _id } = getState().employeeReducer.employee;
  const { data } = await axios.post("/employee/update-password/"+ _id , password);
  dispatch(asyncCurrentEmployee());
  dispatch(addError(data.message))
};


// For employee Sending Email
export const asyncEmployeeSendMail = (employeeEmail) => async (dispatch, getState) => {
  const { data } = await axios.post("/employee/send-mail/" , employeeEmail);
  dispatch(asyncCurrentEmployee());
  dispatch(addError(data.message));
  dispatch(removeError());
};
export const asyncEmployeeOtpVerify = (newpwd) => async (dispatch, getState) => {
  const { data } = await axios.post("/employee/forget-password/" , newpwd);
  // console.log(data)
  dispatch(asyncCurrentEmployee());
  dispatch(addError(data.message));
  dispatch(removeError());
};

export const asyncEmployeeCreateInternship = (newInternship) => async (dispatch, getState) => {
  const { data } = await axios.post("/employee/internship/create/", newInternship );
  // console.log(data)
  dispatch(asyncCurrentEmployee());
  dispatch(asyncEmpolyeeAllInternships());
};

export const asyncEmpolyeeAllInternships = () => async (dispatch, getState) => {
  const { data } = await axios.get("/employee/internship/view-cur-emp-all-intern");
  // console.log(data.internships)
  dispatch(addInternship(data.internships))
  dispatch(asyncCurrentEmployee());
  dispatch(asyncEmpolyeeAllInternships());
};


export const asyncViewInternship = (inernshipId) => async (dispatch, getState) => {
  const { data } = await axios.get("/employee/internship/view-single/"+ inernshipId);
  // console.log(data)
  dispatch(addInternship([data.internship]))
  dispatch(asyncCurrentEmployee());
  dispatch(asyncEmpolyeeAllInternships());
};


export const asyncEmployeeCreateJob = (newJob) => async (dispatch, getState) => {
  const { data } = await axios.post("/employee/job/create/", newJob );
  // console.log(data)
  // dispatch(addInternship(data.internships))
  dispatch(asyncCurrentEmployee());
  dispatch(asyncEmpolyeeAllJobs());
};

export const asyncEmpolyeeAllJobs = () => async (dispatch, getState) => {
  const { data } = await axios.get("/employee/job/view-cur-emp-all-job");
  // console.log(data.jobs)
  dispatch(addJobs(data.jobs))
  dispatch(asyncCurrentEmployee());
  dispatch(asyncEmpolyeeAllJobs());
};

export const asyncViewJob = (jobId) => async (dispatch, getState) => {
  const { data } = await axios.get("/employee/job/view-single/"+ jobId);
  // console.log(data)
  dispatch(addJobs([data.jobs]))
  dispatch(asyncCurrentEmployee());
  dispatch(asyncEmpolyeeAllJobs());
};


