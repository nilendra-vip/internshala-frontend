'use client'
import axios from "@/utils/axios";
import { asyncCurrentStudent } from "./studentActions";

// =================== Resume (EDUCATION) section =================
export const asyncAddEdu = (newEducation) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/add-edu/" , newEducation);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncEditEdu = (eduId , editEduData) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/edit-edu/"+eduId , editEduData);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncDeleteEdu = (eduId) => async (dispatch, getState) => {
    const { data } = await axios.get("/resume/delete-edu/"+eduId);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  
  
  // =================== Resume (JOBs) section =================
  export const asyncAddJob = (newJob) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/add-job/" , newJob);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncEditJob = (jobId , editJobData) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/edit-job/"+jobId , editJobData);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncDeleteJob = (jobId) => async (dispatch, getState) => {
    const { data } = await axios.get("/resume/delete-job/"+jobId);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  
  // =================== Resume (INTERNSHIPS) section =================
  export const asyncAddInternship = (newInternship) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/add-internship/" , newInternship);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncEditInternship = (internshipId , editInternshipData) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/edit-internship/"+internshipId , editInternshipData);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncDeleteInternship = (internshipId) => async (dispatch, getState) => {
    const { data } = await axios.get("/resume/delete-internship/"+internshipId);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  
  // =================== Resume (ROLE) section =================
  export const asyncAddRole = (newRole) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/add-role/" , newRole);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncEditRole = (jobId , editJobData) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/edit-role/"+jobId , editJobData);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncDeleteRole = (jobId) => async (dispatch, getState) => {
    const { data } = await axios.get("/resume/delete-role/"+jobId);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  
  // =================== Resume (COURSES) section =================
  export const asyncAddCourse = (newCourse) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/add-course/" , newCourse);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncEditCourse = (courseId , editCourseData) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/edit-course/"+courseId , editCourseData);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncDeleteCourse = (courseId) => async (dispatch, getState) => {
    const { data } = await axios.get("/resume/delete-course/"+courseId);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  
  // =================== Resume (PROJECT) section =================
  export const asyncAddProject = (newProject) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/add-project/" , newProject);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncEditProject = (projectId , editProjectData) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/edit-project/"+projectId , editProjectData);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncDeleteProject = (projectId) => async (dispatch, getState) => {
    const { data } = await axios.get("/resume/delete-project/"+projectId);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  
  // =================== Resume (SKILLS) section =================
  export const asyncAddSkill = (newSkill) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/add-skill/" , newSkill);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncEditSkill = (skillId , editSkillData) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/edit-skill/"+skillId , editSkillData);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncDeleteSkill = (skillId) => async (dispatch, getState) => {
    const { data } = await axios.get("/resume/delete-skill/"+skillId);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  
  // =================== Resume (INTERESTS) section =================
  export const asyncAddInterest = (newInterest) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/add-interest/" , newInterest);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncEditInterest = (interestId , editInterestData) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/edit-interest/"+interestId , editInterestData);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncDeleteInterest = (interestId) => async (dispatch, getState) => {
    const { data } = await axios.get("/resume/delete-interest/"+interestId);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  
  // =================== Resume (AWARDS) section =================
  export const asyncAddAward = (newAward) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/add-award/" , newAward);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncEditAward = (awardId , editAwardData) => async (dispatch, getState) => {
    const { data } = await axios.post("/resume/edit-award/"+awardId , editAwardData);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  export const asyncDeleteAward = (awardId) => async (dispatch, getState) => {
    const { data } = await axios.get("/resume/delete-award/"+awardId);
    console.log(data)
    dispatch(asyncCurrentStudent());
  };
  
  // ================================================================================================
  