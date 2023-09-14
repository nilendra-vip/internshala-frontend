"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = (props) => {
  // console.log(props)
  const { employee, internships, jobs, errors } = useSelector(
    (state) => state.employeeReducer
  );

  useEffect(() => {}, [employee]);
  return (
    <div className="container mt-5">
      <h1>Review Internship</h1>
      <br />
      <br />
      <ul className="list-group">
        {internships ? (
          <div className="list-group-item mb-3" key={internships._id}>
            <p>{JSON.stringify(internships)}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default page;
