import { asyncAddRole, asyncDeleteRole, asyncEditRole } from "@/store/Actions/resumeActions";
import React from "react";
import { useDispatch } from "react-redux";

const index = ({ student }) => {
  const dispatch = useDispatch();
  const addRoleHandler = () => {
    const newRole = {
      profile: "Frontend Web Developer",
      organization:"Rapidops Inc",
      location:'Bhopal',
      startdate: "2020",
      enddate: "2024",
      role: "This is myy first Role in the web development.",
    };
    dispatch(asyncAddRole(newRole));
  };

  const roleEditHandler = (editId) => {
    const editRoleData = {
      profile: "Web Designe",
      organization:"Nilu Tech Software Solution",
      location:'Bhopal',
      startdate: "01-06-2023",
      enddate: "31-08-2023",
      role: "This is my first Role in the web development.",
    };
    dispatch(asyncEditRole(editId , editRoleData));
  }
  const roleDeleteHandler = (editId) => {
    dispatch(asyncDeleteRole(editId));
  }


  return (
    <div className="container bg-secondary-subtle my-5 py-3">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h3>Roles</h3>
        <button className="btn btn-primary fs-4" onClick={addRoleHandler}>
          + Add Role
        </button>
      </div>
      <ul className="list-group">
        {student?.resume.roles ? (
          student?.resume.roles.map((role) => (
            <li key={role.id} className="list-group-item">
              {JSON.stringify(role)}
              <div className="d-flex gap-3">
                <button onClick={()=> roleEditHandler(role.id)} className="btn btn-info">Edit</button>
                <button onClick={()=> roleDeleteHandler(role.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Roles Empty</p>
        )}
      </ul>
    </div>
  );
};

export default index;
