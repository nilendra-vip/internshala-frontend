"use client";
import React from "react";
import { useSelector } from "react-redux";
import Education from '@/components/Student/Resume/Education'
import Jobs from '@/components/Student/Resume/Jobs'
import Internships from '@/components/Student/Resume/Internships'
import Roles from '@/components/Student/Resume/Role'
import Courses from '@/components/Student/Resume/Courses'
import Projects from '@/components/Student/Resume/Projects'
import Awards from '@/components/Student/Resume/Awards'
import Skills from '@/components/Student/Resume/Skills'
import Interests from '@/components/Student/Resume/Interests'

const page = () => {
  const { student } = useSelector((state) => state.studentReducer);
  console.log(student);
  return (
    <div className="container-fluid ps-3 mt-3 pb-5">
      <h1>Edit {student?.firstname + " " + student?.lastname} Resume</h1>
      <div>
        <Education student={student} />
        <Skills student={student} /> 
        <Interests student={student} /> 
        <Jobs student={student} />
        <Internships student={student} />
        <Courses student={student} />
        <Projects student={student} /> 
        <Roles student={student} />
        <Awards student={student} /> 
      </div>
    </div>
  );
};

export default page;
