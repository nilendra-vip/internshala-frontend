import { asyncAddInterest, asyncDeleteInterest, asyncEditInterest } from "@/store/Actions/resumeActions";
import React from "react";
import { useDispatch } from "react-redux";

const index = ({ student }) => {
  const dispatch = useDispatch();
  const addInterestHandler = () => {
    const newInterest = {
      interest: 'Web Development',
    };
    dispatch(asyncAddInterest(newInterest));
  };

  const interestEditHandler = (editId) => {
    const editInterestData = {
      interest: 'Web 3.0',
    };
    dispatch(asyncEditInterest(editId , editInterestData));
  }
  const interestDeleteHandler = (editId) => {
    dispatch(asyncDeleteInterest(editId));
  }


  return (
    <div className="container bg-secondary-subtle my-5 py-3">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h3>Interests</h3>
        <button className="btn btn-primary fs-4" onClick={addInterestHandler}>
          + Add Interest
        </button>
      </div>
      <ul className="list-group">
        {student?.resume.interests ? (
          student?.resume.interests.map((interest) => (
            <li key={interest.id} className="list-group-item">
              {JSON.stringify(interest)}
              <div className="d-flex gap-3">
                <button onClick={()=> interestEditHandler(interest.id)} className="btn btn-info">Edit</button>
                <button onClick={()=> interestDeleteHandler(interest.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Interests Empty</p>
        )}
      </ul>
    </div>
  );
};

export default index;
