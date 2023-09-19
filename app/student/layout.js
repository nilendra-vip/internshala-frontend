"use client";
import { asyncCurrentStudent, asyncStudentSignout } from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentNavbar from '@/components/Navbar/studentNavbar'


const Studentlayout = ({ children }) => {
  const signValue = children.props.childProp.segment
  const userValue = children.props.segmentPath[1]
  // console.log(children)
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
      
      
      <StudentNavbar signValue={signValue} userValue={userValue}/>
      {children}
    </>
  );
};

export default Studentlayout;
