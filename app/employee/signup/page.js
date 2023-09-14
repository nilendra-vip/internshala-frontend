"use client";
import { asyncEmployeeSignup } from "@/store/Actions/employeeActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const {isAuthenticated} = useSelector((state) => state.employeeReducer);

  useEffect(() => {
    if(isAuthenticated) router.push('/employee/auth')
  }, [isAuthenticated]);
const signupHandler = () => {
    const newEmployee = {
      firstname: "Mukesh",
      lastname: "Sharma",
      contact: "7898482806",
      email: "nilendrapatel1317@gmail.com",
      password: "123456",
      organizationName:'Rapidops Inc'
    };
    dispatch(asyncEmployeeSignup(newEmployee));
    // router.push('/employee/auth')
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
