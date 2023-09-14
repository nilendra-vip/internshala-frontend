"use client";
import { asyncCurrentStudent, asyncStudentSignout } from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Studentlayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {isAuthenticated} = useSelector((state) => state.studentReducer);
  // console.log(isAuthenticated)

  useEffect(() => {
    dispatch(asyncCurrentStudent());
    if(isAuthenticated) router.push('/student/auth')
  }, [isAuthenticated]);

  const signoutHandler = () => {
    dispatch(asyncStudentSignout())
  }

  return (
    <>
      <nav className="bg-secondary d-flex gap-5 px-5 py-3">
        <Link className="btn btn-primary fs-5" href={isAuthenticated ? '/student/auth' : '/student'}>Home</Link>
        {isAuthenticated ? (
          <>
            <Link onClick={signoutHandler} href='' className="btn btn-primary fs-5">Sign Out</Link>
            <Link  href='/student/auth/profile' className="btn btn-info fs-5">Profile</Link>
            <Link  href='/student/auth/applied' className="btn btn-success fs-5">Applied</Link>
            <Link  href='/student/auth/resume' className="btn btn-warning fs-5">Resume</Link>
          </> 
        ):( 
          <>
            <Link className="btn btn-primary fs-5" href='/student/signup'>Sign Up</Link>
            <Link className="btn btn-primary fs-5" href='/student/signin'>Sign In</Link>
          </>
        )}
          
      </nav>
      {children}
    </>
  );
};

export default Studentlayout;
