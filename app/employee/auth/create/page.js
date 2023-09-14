"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { employee } = useSelector((state) => state.employeeReducer);
  return (
    <div className="conatiner mt-3">
       <Link href='/employee/auth/create/internship' className="btn btn-primary">Create Internship</Link>

       <br /><br />
       <Link href='/employee/auth/create/job' className="btn btn-primary">Create Job</Link>
    </div>
  );
};

export default page;
