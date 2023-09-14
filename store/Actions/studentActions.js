"use client";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import {
  addStudent,
  removeStudent,
  addError,
  removeError,
  addJobs,
  addInternship,
} from "../Reducers/studentReducer";

// For current student 
export const asyncCurrentStudent = (student) => async (dispatch, getState) => {
  const { data } = await axios.get("/student/current");
  if(!data.message){
    dispatch(addStudent(data.student));
  }
  else{
    dispatch(addError(data.message));
  }
};

// For student signup
export const asyncStudentSignup = (student) => async (dispatch, getState) => {
  const { data } = await axios.post("/student/signup", student);
  if(!data.message){
    dispatch(asyncCurrentStudent());
  }
  else{
    dispatch(addError(data.message));
  }
};

// For student signin
export const asyncStudentSignin = (student) => async (dispatch, getState) => {
  const { data } = await axios.post("/student/signin", student);
  if(!data.message){
    dispatch(asyncCurrentStudent());
  }
  else{
    dispatch(addError(data.message));
  }
};

//For Student Signout
export const asyncStudentSignout = (student) => async (dispatch, getState) => {
  const { data } = await axios.get("/student/signout");
  dispatch(removeStudent());
};

// For student profile Update
export const asyncStudentUpdate = (student) => async (dispatch, getState) => {
  const { _id } = getState().studentReducer.student;
  const { data } = await axios.post("/student/update/"+ _id ,student);
  if(!data.message){
    dispatch(asyncCurrentStudent());
  }
  else{
    dispatch(addError(data.message));
  }
};

// For student Avatar update
export const asyncStudentAvatar = (avatar) => async (dispatch, getState) => {
  const { _id } = getState().studentReducer.student;
  const { data } = await axios.post("/student/avatar/"+ _id , avatar);
  dispatch(asyncCurrentStudent());
};

// For student Password Update
export const asyncStudentUpdatePassword = (password) => async (dispatch, getState) => {
  const { _id } = getState().studentReducer.student;
  const { data } = await axios.post("/student/update-password/"+ _id , password);
  dispatch(asyncCurrentStudent());
};


// For student Update Password
export const asyncStudentSendMail = (studentEmail) => async (dispatch, getState) => {
  const { data } = await axios.post("/student/send-mail/" , studentEmail);
  dispatch(asyncCurrentStudent());
  dispatch(addError(data.message));
  toast.error(JSON.stringify(data.message));
  dispatch(removeError());
};
export const asyncStudentOtpVerify = (newpwd) => async (dispatch, getState) => {
  const { data } = await axios.post("/student/forget-password/" , newpwd);
  console.log(data)
  dispatch(asyncCurrentStudent());
  dispatch(addError(data.message));
  toast.error(JSON.stringify(data.message));
  dispatch(removeError());
};

export const asyncStudentInternshipApplying = (internshipId) => async (dispatch, getState) => {
  const { data } = await axios.get("/student/apply-internship/" + internshipId  );
  console.log(data)
  dispatch(asyncCurrentStudent());
  dispatch(asyncAllInternships());
};

export const asyncStudentJobApplying = (jobId) => async (dispatch, getState) => {
  const { data } = await axios.get("/student/apply-job/" + jobId  );
  console.log(data)
  dispatch(asyncCurrentStudent());
  dispatch(asyncAllJobs());
};

export const asyncAllInternships = () => async (dispatch, getState) => {
  const { data } = await axios.get("/student/allinternships/");
  console.log(data)
  dispatch(addInternship(data.internships))
};
export const asyncAllJobs = () => async (dispatch, getState) => {
  const { data } = await axios.get("/student/alljobs/");
  dispatch(addJobs(data.jobs))
  console.log(data)
};
















