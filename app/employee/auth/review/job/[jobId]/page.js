"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = (props) => {
  // console.log(props)
  const { employee, internships, jobs, errors } = useSelector(
    (state) => state.employeeReducer
  );
  // console.log(jobs)

  useEffect(() => {}, [employee , internships, jobs , errors]);
  return (
    <div className="container mt-5">
      <h1>Review Job</h1>
      <br />
      <br />
      <ul className="list-group">
        {jobs ? (
          <div className="list-group-item mb-3" >
            <p>{JSON.stringify(jobs)}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default page;
