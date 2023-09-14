import { asyncAddSkill, asyncDeleteSkill, asyncEditSkill } from "@/store/Actions/resumeActions";
import React from "react";
import { useDispatch } from "react-redux";

const index = ({ student }) => {
  const dispatch = useDispatch();
  const addSkillHandler = () => {
    const newSkill = {
      skill:"Next JS",
      level: "Beginner",
    };
    dispatch(asyncAddSkill(newSkill));
  };

  const skillEditHandler = (editId) => {
    const editSkillData = {
      skill:"HTML",
      level: "Intermediate",
    };
    dispatch(asyncEditSkill(editId , editSkillData));
  }
  const skillDeleteHandler = (editId) => {
    dispatch(asyncDeleteSkill(editId));
  }


  return (
    <div className="container bg-secondary-subtle my-5 py-3">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h3>Skills</h3>
        <button className="btn btn-primary fs-4" onClick={addSkillHandler}>
          + Add Skill
        </button>
      </div>
      <ul className="list-group">
        {student?.resume.skills ? (
          student?.resume.skills.map((skill) => (
            <li key={skill.id} className="list-group-item">
              {JSON.stringify(skill)}
              <div className="d-flex gap-3">
                <button onClick={()=> skillEditHandler(skill.id)} className="btn btn-info">Edit</button>
                <button onClick={()=> skillDeleteHandler(skill.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Skills Empty</p>
        )}
      </ul>
    </div>
  );
};

export default index;
