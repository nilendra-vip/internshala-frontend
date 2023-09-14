'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const metadata = {
  title: "Student | Homepage",
};
const page = () => {
  const router = useRouter();
  const {isAuthenticated} = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if(isAuthenticated) router.push('/student/auth')
  }, [isAuthenticated]);
  return (
    <div className="container mt-5">
      <div className="fs-3 bg-warning text-dark d-flex justify-content-center align-items-center" style={{ height: "30vh",width:'100%' }}>Student Login SignUp Page</div>
    </div>
  );
};

export default page;
