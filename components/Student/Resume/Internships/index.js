import { asyncAddInternship, asyncDeleteInternship, asyncEditInternship } from "@/store/Actions/resumeActions";
import React from "react";
import { useDispatch } from "react-redux";

const index = ({ student }) => {
  const dispatch = useDispatch();
  const addInternshipHandler = () => {
    const newInternship = {
      profile: "Frontend Web DEveloper",
      organization:"Rapidops Inc",
      location:'Bhopal',
      startdate: "2020",
      enddate: "2024",
      Description: "This is myy first Internship in the web development.",
    };
    dispatch(asyncAddInternship(newInternship));
  };

  const internshipEditHandler = (editId) => {
    const editInternshipData = {
      profile: "Web Designe",
      organization:"Nilu Tech Software Solution",
      location:'Bhopal',
      startdate: "01-06-2023",
      enddate: "31-08-2023",
      Description: "This is my first Internship in the web development.",
    };
    dispatch(asyncEditInternship(editId , editInternshipData));
  }
  const internshipDeleteHandler = (editId) => {
    dispatch(asyncDeleteInternship(editId));
  }


  return (
    <div className="container bg-secondary-subtle my-5 py-3">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h3>Internships</h3>
        <button className="btn btn-primary fs-4" onClick={addInternshipHandler}>
          + Add Internship
        </button>
      </div>
      <ul className="list-group">
        {student?.resume.internships ? (
          student?.resume.internships.map((internship) => (
            <li key={internship.id} className="list-group-item">
              {JSON.stringify(internship)}
              <div className="d-flex gap-3">
                <button onClick={()=> internshipEditHandler(internship.id)} className="btn btn-info">Edit</button>
                <button onClick={()=> internshipDeleteHandler(internship.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Internships Empty</p>
        )}
      </ul>
    </div>
  );
};

export default index;
