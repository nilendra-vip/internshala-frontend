"use client";
import {
  asyncStudentInternshipApplying,
  asyncStudentJobApplying,
} from "@/store/Actions/studentActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const metadata = {
  title: "Homepage",
};

const page = () => {
  const dispatch = useDispatch();
  const applyInternshipHandler = (internshipId) => {
    dispatch(asyncStudentInternshipApplying(internshipId));
  };
  const applyJobHandler = (jobId) => {
    dispatch(asyncStudentJobApplying(jobId));
  };
  const { student, internships, jobs } = useSelector(
    (state) => state.studentReducer
  );
  useEffect(() => {}, [student]);

  return (
    <div className="container mt-5">
      <div
        className="fs-3 bg-secondary text-light d-flex justify-content-center align-items-center"
        style={{ height: "10vh", width: "100%" }}
      >
        Authorized User can only access this page
      </div>
      <br />
      <br />
      <div
        className="fs-3 bg-secondary text-light p-5 "
        style={{ width: "100%" }}
      >
        <h2>Available Internships</h2>
        <ul className="list-group">
          {internships?.map((internship) => (
            <div className="list-group-item mb-3" key={internship._id}>
              <p>{JSON.stringify(internship)}</p>
              {!internship.students.includes(student?._id) ? (
                <button className="btn btn-primary fs-5" onClick={() => applyInternshipHandler(internship._id)}>
                  Apply Internship
                </button>
              ) : (
                <h3 className="btn btn-success">Already Applied</h3>
              )}
            </div>
          ))}
        </ul>
      </div>
      <br />
      <br />
      <div
        className="fs-3 bg-secondary text-light p-5 "
        style={{ width: "100%" }}
      >
        <h2>Available Jobs</h2>
        <ul className="list-group">
          {jobs?.map((job) => (
            <div className="list-group-item mb-3" key={job._id}>
              <p>{JSON.stringify(job)}</p>
              {!job.students.includes(student?._id) ? (
                <button className="btn btn-primary fs-5" onClick={() => applyJobHandler(job._id)}>
                  Apply Job
                </button>
              ) : (
                <h3 className="btn btn-success">Already Applied</h3>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
