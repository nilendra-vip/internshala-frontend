"use client";
import { asyncStudentSignup } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const {isAuthenticated} = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if(isAuthenticated) router.push('/student/auth')
  }, [isAuthenticated]);
const signupHandler = () => {
    const newStudent = {
      firstname: "Nilendra",
      lastname: "Patel",
      contact: "9406663416",
      city: "Bhopal",
      gender: "Male",
      email: "patelnilendra809@gmail.com",
      password: "123456",
    };
    dispatch(asyncStudentSignup(newStudent));
    router.push('/student/auth')
  };
  return (
    <div className="container mt-5">
      <h1>Signup Page</h1>
      <div className="bg-secondary my-5 d-flex align-items-center justify-content-center text-light fs-4" style={{ height: "30vh",width:'100%' }}>SignUp Form Here</div>
      <button onClick={signupHandler} className="btn btn-success">
        SignUp
      </button>
    </div>
  );
};

export default page;
