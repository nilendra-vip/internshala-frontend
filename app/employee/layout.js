"use client";
import { asyncCurrentEmployee, asyncEmployeeSignout } from "@/store/Actions/employeeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Employeelayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {isAuthenticated} = useSelector((state) => state.employeeReducer);
  // console.log(isAuthenticated)

  useEffect(() => {
    dispatch(asyncCurrentEmployee());
    if(isAuthenticated) router.push('/employee/auth')
  }, [isAuthenticated]);

  const signoutHandler = () => {
    dispatch(asyncEmployeeSignout())
  }

  return (
    <>
      <nav className="bg-secondary d-flex gap-5 px-5 py-3">
        <Link className="btn btn-primary fs-5" href={isAuthenticated ? '/employee/auth' : '/employee'}>Home</Link>
        {isAuthenticated ? (
          <>
            <Link onClick={signoutHandler} href='' className="btn btn-primary fs-5">Sign Out</Link>
            <Link  href='/employee/auth/profile' className="btn btn-primary fs-5">Profile</Link>
            <Link  href='/employee/auth/create' className="btn btn-primary fs-5">Created</Link>
          </> 
        ):( 
          <>
            <Link className="btn btn-primary fs-5" href='/employee/signup'>Sign Up</Link>
            <Link className="btn btn-primary fs-5" href='/employee/signin'>Sign In</Link>
          </>
        )}
          
      </nav>
      {children}
    </>
  );
};

export default Employeelayout;
