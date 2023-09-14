import { asyncAddJob, asyncDeleteJob, asyncEditJob } from "@/store/Actions/resumeActions";
import React from "react";
import { useDispatch } from "react-redux";

const index = ({ student }) => {
  const dispatch = useDispatch();
  const addJobHandler = () => {
    const newJob = {
      profile: "Frontend Web DEveloper",
      organization:"Rapidops Inc",
      location:'Bhopal',
      startdate: "2020",
      enddate: "2024",
      Description: "This is myy first job in the web development.",
    };
    dispatch(asyncAddJob(newJob));
  };

  const jobEditHandler = (editId) => {
    const editJobData = {
      profile: "Backend Web DEveloper",
      organization:"Nilu-Tech Inc",
      location:'Indore',
      startdate: "2023",
      enddate: "2024",
      Description: "This is myy first job in the web development.",
    };
    dispatch(asyncEditJob(editId , editJobData));
  }
  const jobDeleteHandler = (editId) => {
    dispatch(asyncDeleteJob(editId));
  }


  return (
    <div className="container bg-secondary-subtle my-5 py-3">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h3>JOBS</h3>
        <button className="btn btn-primary fs-4" onClick={addJobHandler}>
          + Add Job
        </button>
      </div>
      <ul className="list-group">
        {student?.resume.jobs ? (
          student?.resume.jobs.map((job) => (
            <li key={job.id} className="list-group-item">
              {JSON.stringify(job)}
              <div className="d-flex gap-3">
                <button onClick={()=> jobEditHandler(job.id)} className="btn btn-info">Edit</button>
                <button onClick={()=> jobDeleteHandler(job.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Jobs Empty</p>
        )}
      </ul>
    </div>
  );
};

export default index;
