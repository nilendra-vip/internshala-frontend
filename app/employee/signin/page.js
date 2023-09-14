"use client";
import { asyncEmployeeSignin } from "@/store/Actions/employeeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {

  const showWrongPassMsg = useRef(null);

  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.employeeReducer);
  console.log(errors.length)
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeeReducer);

  // useEffect(() => {
  //   if(isAuthenticated) router.push('/employee/auth')
  // }, [isAuthenticated]);
  const signinHandler = () => {
    const employee = {
      email: "patelnilendra809@gmail.com",
      password: "123456",
    };
    dispatch(asyncEmployeeSignin(employee));
    if (errors.length === 0) {
      router.push("/employee/auth");
    } else {
      router.push("/employee/signin");
    }
  };

  return (
    <div className="container mt-5">
      <h1>SignIn Page</h1>
      <div
        className="bg-secondary my-5 d-flex align-items-center justify-content-center text-light fs-4"
        style={{ height: "30vh", width: "100%" }}
      >
        SignIn Form Here
      </div>
      {errors.includes('Wrong Password') && (
        <p ref={showWrongPassMsg}>Wrong Password</p>
      )}
      <button onClick={signinHandler} className="btn btn-success">
        SignIn
      </button>
      <br />
      <br />
      <Link href="/employee/forget" className="btn btn-danger fs-4">
        Forget Password
      </Link>
    </div>
  );
};

export default page;
