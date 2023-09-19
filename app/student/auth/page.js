"use client";
import {
  asyncStudentInternshipApplying,
  asyncStudentJobApplying,
} from "@/store/Actions/studentActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tabs from '@/components/Student/Tabs/tabs'

export const metadata = {
  title: "Homepage",
};

const page = () => {


  const { student, internships, jobs } = useSelector(
    (state) => state.studentReducer
  );
  useEffect(() => {}, [student]);

  return (
    <div className="container">
      <Tabs internships={internships} jobs={jobs} student={student}  />

    </div>
  );
};

export default page;
