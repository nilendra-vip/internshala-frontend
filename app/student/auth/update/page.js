"use client";
import { asyncStudentAvatar, asyncStudentUpdate, asyncStudentUpdatePassword } from "@/store/Actions/studentActions";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const { student } = useSelector((state) => state.studentReducer);
  const updateStudentHandler = () => {
    const Student = {
      firstname: "Nilendra",
      //   lastname: "Patel",
      contact: "7898482806",
      city: "Bhopal",
      //   gender: "Male",
      //   email: "patelnilendra809@gmail.com",
    };
    dispatch(asyncStudentUpdate(Student));
  };
  const resetPasswordHandler = () => {
    const updatePassword = {
      password : '12345678'
    }
    dispatch(asyncStudentUpdatePassword(updatePassword));
  }


  const avatarHandler =(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set('avatar', e.target.avatar.files[0]);
    dispatch(asyncStudentAvatar(formData));
  }


  return (
    <div className="container bg-secondary mt-5 py-3">
      <img src={student && student.avatar.url} height={300} alt="" />
      <form onSubmit={avatarHandler} encType="multipart/form-data">
        <input type="file" name='avatar' />
        <button type="submit">Submit</button>
      </form>
      <br /><br />
      <button onClick={updateStudentHandler} className="btn btn-warning fs-4">
        Update Student
      </button>
      <br /><br />
      <button onClick={resetPasswordHandler} className="btn btn-danger fs-4">
        Update Password
      </button>
    </div>
  );
};

export default page;
