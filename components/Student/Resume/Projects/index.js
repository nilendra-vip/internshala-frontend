import { asyncAddProject, asyncDeleteProject, asyncEditProject } from "@/store/Actions/resumeActions";
import React from "react";
import { useDispatch } from "react-redux";

const index = ({ student }) => {
  const dispatch = useDispatch();
  const addProjectHandler = () => {
    const newProject = {
      title: "Internshala Clone Project",
      startdate: "01-06-2022",
      enddate: "01-06-2023",
      description: "This is a Full Stack Project inspired by Internshala. Based on React Project.",
      projectLink: "https://github.com/nilendra-vip/internshala-clone",
    };
    dispatch(asyncAddProject(newProject));
  };

  const projectEditHandler = (editId) => {
    const editProjectData = {
      title: "Whatsapp Clone Project",
      startdate: "01-06-2022",
      enddate: "01-06-2023",
      description: "This is a Full Stack Project inspired by Internshala. Based on NodeJS Project",
      projectLink: "https://github.com/nilendra-vip/whatsapp-clone",
    };
    dispatch(asyncEditProject(editId , editProjectData));
  }
  const projectDeleteHandler = (editId) => {
    dispatch(asyncDeleteProject(editId));
  }


  return (
    <div className="container bg-secondary-subtle my-5 py-3">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h3>Projects</h3>
        <button className="btn btn-primary fs-4" onClick={addProjectHandler}>
          + Add Project
        </button>
      </div>
      <ul className="list-group">
        {student?.resume.projects ? (
          student?.resume.projects.map((project) => (
            <li key={project.id} className="list-group-item">
              {JSON.stringify(project)}
              <div className="d-flex gap-3">
                <button onClick={()=> projectEditHandler(project.id)} className="btn btn-info">Edit</button>
                <button onClick={()=> projectDeleteHandler(project.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Projects Empty</p>
        )}
      </ul>
    </div>
  );
};

export default index;
