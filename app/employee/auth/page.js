"use client";
import { asyncViewInternship, asyncViewJob } from "@/store/Actions/employeeActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const metadata = {
  title: "Homepage",
};

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { employee, internships, jobs , errors } = useSelector(
    (state) => state.employeeReducer
  );
  useEffect(() => {}, [employee , internships, jobs, errors]);


  const reviewInternshipHandler = (internshipId)=>{
    dispatch(asyncViewInternship(internshipId));
    if(errors.length === 0 ){
      router.push(`/employee/auth/review/internship/${internshipId}`);
    }
  }
  const reviewJobpHandler = (jobId)=>{
    dispatch(asyncViewJob(jobId));
    if(errors.length === 0 ){
      router.push(`/employee/auth/review/job/${jobId}`);
    }
  }

  return (
    <div className="container mt-5">
      <div
        className="fs-3 bg-secondary text-light d-flex justify-content-center align-items-center"
        style={{ height: "10vh", width: "100%" }}
      >
        Internships and Jobs by {employee?.firstname}
      </div>
      <br />
      <br />
      <div>
        <ul className="list-group">
          {internships ? (
            internships.map((internship) => (
              <div className="list-group-item mb-3" key={internship._id}>
                <p>{JSON.stringify(internship)}</p>
                <button onClick={() => reviewInternshipHandler(internship._id)}>
                  Review Internship
                </button>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
      <br />
      <div>
        <ul className="list-group">
          {jobs ? (
            jobs.map((job) => (
              <div className="list-group-item mb-3" key={job?._id}>
                <p>{JSON.stringify(job)}</p>
                <button onClick={() => reviewJobpHandler(job?._id)}>
                  Review Job
                </button>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default page;
