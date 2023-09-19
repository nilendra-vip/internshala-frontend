"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CustomInput from "@/components/CustomInput/CustomInput";
import Navbar from "@/components/Navbar/homeNavbar";
import Button from "@/components/Button";
import style from "./page.module.css";
import Image from "next/image";
import signIn from "@/public/images/Login-pana.svg";

export const metadata = {
  title: "Student | Homepage",
};

const page = () => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);
  return (
    <div
      className={`d-flex justify-content-around align-items-center  ${style.signinContainer}`}
      style={{ height: "88vh" }}
    >
      <div>
        <Image src={signIn} alt="" height={500} className="imageShadow" />
      </div>
      <div
        className="bg-primary col-md-6 p-5  border rounded-2 border bg-white"
        style={{
          boxShadow: "5px 5px 10px #bebebe",
        }}
      >
        <h1 className="text-center mb-4 theme-text-colour">
        👩‍🎓Welcome as a student 👨‍🎓
        </h1>
        <h4 className="text-center mb-4 theme-text-colour d-flex flex-column gap-3">
          <span>Please</span>{" "}
          <div>
            <Button link="/student/signin" btnValue="Login" /> or{" "}
            <Button link="/student/signup" btnValue="SignUp" />
          </div>{" "}
          <span>to enjoy our sevice.</span>
        </h4>
      </div>
    </div>
  );
};

export default page;
