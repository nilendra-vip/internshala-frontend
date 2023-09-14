import { asyncAddAward, asyncDeleteAward, asyncEditAward } from "@/store/Actions/resumeActions";
import React from "react";
import { useDispatch } from "react-redux";

const index = ({ student }) => {
  const dispatch = useDispatch();
  const addAwardHandler = () => {
    const newAward = {
      title: "Web Design Showcase 2K23",
      organization:"Sheryians Coding School",
      location:'Bhopal',
      description: "This is my first Award in the web development which was given by the Sheryians Coding School.",
    };
    dispatch(asyncAddAward(newAward));
  };

  const awardEditHandler = (editId) => {
    const editAwardData = {
      title: "Web Designe",
      organization:"Nilu Tech Software Solution",
      location:'Bhopal',
      startdate: "01-06-2023",
      enddate: "31-08-2023",
      description: "This is my first Award in the web development.",
    };
    dispatch(asyncEditAward(editId , editAwardData));
  }
  const awardDeleteHandler = (editId) => {
    dispatch(asyncDeleteAward(editId));
  }


  return (
    <div className="container bg-secondary-subtle my-5 py-3">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h3>Awards</h3>
        <button className="btn btn-primary fs-4" onClick={addAwardHandler}>
          + Add Award
        </button>
      </div>
      <ul className="list-group">
        {student?.resume.awards ? (
          student?.resume.awards.map((award) => (
            <li key={award.id} className="list-group-item">
              {JSON.stringify(award)}
              <div className="d-flex gap-3">
                <button onClick={()=> awardEditHandler(award.id)} className="btn btn-info">Edit</button>
                <button onClick={()=> awardDeleteHandler(award.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Awards Empty</p>
        )}
      </ul>
    </div>
  );
};

export default index;
