import { asyncAddCourse, asyncDeleteCourse, asyncEditCourse } from "@/store/Actions/resumeActions";
import React from "react";
import { useDispatch } from "react-redux";

const index = ({ student }) => {
  const dispatch = useDispatch();
  const addCourseHandler = () => {
    const newCourse = {
      courses: "Full Stacl Web Development",
      organization:"Sheryians Coding School",
      mode:'Offline',
      location:'Bhopal',
      startdate: "01-06-2022",
      enddate: "01-06-2023",
      description: "From here i had completed my full stack web devvelopment courses from which i have learnt lot's of technology likes html , css , javascript , nodejs , mongodb , reactjs , next ja and much more . A big thanks to sheriyans Coding School who will provide this opertunity .",
    };
    dispatch(asyncAddCourse(newCourse));
  };

  const courseEditHandler = (editId) => {
    const editCourseData = {
      profile: "Web Designing",
      organization:"Nilu Tech Software Solution",
      location:'Bhopal',
      startdate: "01-06-2023",
      enddate: "31-08-2023",
      description: "From here i had completed my full stack web devvelopment courses from which i have learnt lot's of technology likes html , css , javascript , nodejs , mongodb , reactjs , next ja and much more . A big thanks to sheriyans Coding School who will provide this opertunity .",
    };
    dispatch(asyncEditCourse(editId , editCourseData));
  }
  const courseDeleteHandler = (editId) => {
    dispatch(asyncDeleteCourse(editId));
  }


  return (
    <div className="container bg-secondary-subtle my-5 py-3">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h3>Courses</h3>
        <button className="btn btn-primary fs-4" onClick={addCourseHandler}>
          + Add Course
        </button>
      </div>
      <ul className="list-group">
        {student?.resume.courses ? (
          student?.resume.courses.map((course) => (
            <li key={course.id} className="list-group-item">
              {JSON.stringify(course)}
              <div className="d-flex gap-3">
                <button onClick={()=> courseEditHandler(course.id)} className="btn btn-info">Edit</button>
                <button onClick={()=> courseDeleteHandler(course.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Courses Empty</p>
        )}
      </ul>
    </div>
  );
};

export default index;
