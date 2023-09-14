"use client";
import { asyncStudentSignin } from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const {isAuthenticated} = useSelector((state) => state.studentReducer);

  // useEffect(() => {
  //   if(isAuthenticated) router.push('/student/auth')
  // }, [isAuthenticated]);
const signinHandler = () => {
  const student = {
    email: "patelnilendra809@gmail.com",
    password: "123456",
  };
  dispatch(asyncStudentSignin(student));
  router.push('/student/auth')
  };


  return (
    <div className="container mt-5">
      <h1>SignIn Page</h1>
      <div className="bg-secondary my-5 d-flex align-items-center justify-content-center text-light fs-4" style={{ height: "30vh",width:'100%' }}>SignIn Form Here</div>
      <button onClick={signinHandler} className="btn btn-success">
        SignIn
      </button>
      <br /><br />
      <Link href='/student/forget' className="btn btn-danger fs-4">Forget Password</Link>
      
    </div>
  );
};

export default page;
