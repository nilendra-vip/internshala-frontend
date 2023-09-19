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
  addOTP,
  removeOTP,
} from "../Reducers/studentReducer";

// For current student
export const asyncCurrentStudent = (student) => async (dispatch, getState) => {
  const { data } = await axios.get("/student/current");
  if (!data.message) {
    dispatch(addStudent(data.student));
  } else {
    dispatch(addError(data.message));
  }
};

// For student signup
export const asyncStudentSignup = (student) => async (dispatch, getState) => {
  const { data } = await axios.post("/student/signup", student);
  if (data.errName) {
    toast.error(JSON.stringify(data.message));
    dispatch(asyncCurrentStudent());
    dispatch(addError(data.message))
  } else {
    toast.success(JSON.stringify(data.message));
    dispatch(addError(data.message))
    dispatch(removeError())
  }
};

// For student signin
export const asyncStudentSignin = (student) => async (dispatch, getState) => {
  const { data } = await axios.post("/student/signin", student);
  if (!data.message) {
    dispatch(asyncCurrentStudent());
  } else {
    dispatch(addError(data.message));
  }
};

//For Student Signout
export const asyncStudentSignout = (student) => async (dispatch, getState) => {
  const { data } = await axios.get("/student/signout");
  dispatch(removeStudent());
  dispatch(removeError());
};

// For student profile Update
export const asyncStudentUpdate = (student) => async (dispatch, getState) => {
  const { _id } = getState().studentReducer.student;
  const { data } = await axios.post("/student/update/" + _id, student);
  if (!data.message) {
    dispatch(asyncCurrentStudent());
  } else {
    dispatch(addError(data.message));
  }
};

// For student Avatar update
export const asyncStudentAvatar = (avatar) => async (dispatch, getState) => {
  const { _id } = getState().studentReducer.student;
  const { data } = await axios.post("/student/avatar/" + _id, avatar);
  dispatch(asyncCurrentStudent());
};

// For student Password Update
export const asyncStudentUpdatePassword =
  (password) => async (dispatch, getState) => {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post(
      "/student/update-password/" + _id,
      password
    );
    dispatch(asyncCurrentStudent());
  };

// For student Send OTP Password
export const asyncStudentSendMail =
  (studentEmail) => async (dispatch, getState) => {
    const { data } = await axios.post("/student/send-mail/", studentEmail);
    if (data.errName) {
      toast.error(JSON.stringify(data.message));
      dispatch(addError(data.message));
    } else {
      toast.success(JSON.stringify(data.message));
      dispatch(addOTP(data.student.resetPasswordToken));
      dispatch(addError(data.message));
      dispatch(removeError());
    }
  };

export const resetErrors = () => ({
  type: "RESET_ERRORS",
});

// For verify OTP
export const asyncStudentOtpVerify = (newpwd) => async (dispatch, getState) => {
  const { data } = await axios.post("/student/forget-password/", newpwd);

  if (data.errName) {
    toast.error(JSON.stringify(data.message));
    dispatch(addError(data.message));
  } else {
    toast.success(JSON.stringify(data.message));
    dispatch(addError(data.message));
    dispatch(removeError());
  }
};

export const asyncStudentInternshipApplying =
  (internshipId) => async (dispatch, getState) => {
    const { data } = await axios.get(
      "/student/apply-internship/" + internshipId
    );
    dispatch(asyncCurrentStudent());
    dispatch(asyncAllInternships());
  };

export const asyncStudentJobApplying =
  (jobId) => async (dispatch, getState) => {
    const { data } = await axios.get("/student/apply-job/" + jobId);
    dispatch(asyncCurrentStudent());
    dispatch(asyncAllJobs());
  };

export const asyncAllInternships = () => async (dispatch, getState) => {
  const { data } = await axios.get("/student/allinternships/");
  dispatch(addInternship(data.internships));
};
export const asyncAllJobs = () => async (dispatch, getState) => {
  const { data } = await axios.get("/student/alljobs/");
  dispatch(addJobs(data.jobs));
};
