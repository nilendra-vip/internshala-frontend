import { asyncAddEdu, asyncDeleteEdu, asyncEditEdu } from "@/store/Actions/resumeActions";
import React from "react";
import { useDispatch } from "react-redux";

const index = ({ student }) => {
  const dispatch = useDispatch();
  const addEduHandler = () => {
    const newEducation = {
      school: "Kendriya Vidyalaya ",
      startYear: "2019",
      endYear: "2020",
      board: "CBSE",
      stream: "Science",
      grade: "68 %",
    };
    dispatch(asyncAddEdu(newEducation));
  };

  const eduEditHandler = (editId) => {
    const editEduData = {
      college: "JNCT Bhopal",
      startYear: "2020",
      endYear: "2024",
      degree: "M-Tech",
      branch: "Civil Engg",
      grade: "7.5 CGPA",
    };
    dispatch(asyncEditEdu(editId , editEduData));
  }
  const eduDeleteHandler = (editId) => {
    dispatch(asyncDeleteEdu(editId));
  }


  return (
    <div className="container bg-secondary-subtle my-5 py-3">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h3>EDUCATION</h3>
        <button className="btn btn-primary fs-4" onClick={addEduHandler}>
          + Add Education
        </button>
      </div>
      <ul className="list-group">
        {student?.resume.education ? (
          student?.resume.education.map((edu) => (
            <li key={edu.id} className="list-group-item">
              {JSON.stringify(edu)}
              <div className="d-flex gap-3">
                <button onClick={()=> eduEditHandler(edu.id)} className="btn btn-info">Edit</button>
                <button onClick={()=> eduDeleteHandler(edu.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Education Empty</p>
        )}
      </ul>
    </div>
  );
};

export default index;
