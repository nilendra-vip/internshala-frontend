import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import StudentProfile from "@/components/Student/StudentNavIcon";
import Button from "@/components/Button";
import Logo from "@/components/Navbar/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { asyncCurrentStudent } from "@/store/Actions/studentActions";

const navbar = ({ signValue, userValue }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated , student } = useSelector((state) => state.studentReducer);
  // console.log(isAuthenticated)

  useEffect(() => {
    dispatch(asyncCurrentStudent());
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated, signValue]);

  return (
    <div className={style.navbarContainer}>
      <Logo />
      <nav className=" d-flex  align-items-center ">
        <h5>Welcome, <span className="theme-text-colour">{student?.firstname}</span></h5>
        {isAuthenticated && (
          <StudentProfile isAuthenticated={isAuthenticated} student={student} />
        )}
      </nav>
    </div>
  );
};

export default navbar;
