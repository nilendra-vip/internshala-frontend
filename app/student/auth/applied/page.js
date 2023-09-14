"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { student } = useSelector((state) => state.studentReducer);
  return (
    <div className="conatiner mt-3">
        <h3>Applied Internships and Jobs</h3>
      <ul className="list-group">
        {
          student?.internships.map((internship) => (
            <div className="list-group-item mb-3" key={internship._id}>
              <p>{JSON.stringify(internship)}</p>
            </div>
          ))}
        {
          student?.jobs.map((job) => (
            <div className="list-group-item mb-3" key={job._id}>
              <p>{JSON.stringify(job)}</p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
