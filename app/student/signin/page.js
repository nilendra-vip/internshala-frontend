"use client";
import { asyncStudentSignin } from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "@/components/CustomInput/CustomInput";
import Navbar from "@/components/Navbar/homeNavbar";
import Button from "@/components/Button";
import style from "./page.module.css";
import Image from "next/image";
import signIn from "@/public/images/Login-pana.svg";

const page = () => {
  const showWrongPassMsg = useRef(null);

  const dispatch = useDispatch();

  const router = useRouter();
  const { isAuthenticated, errors } = useSelector(
    (state) => state.studentReducer
  );

  // useEffect(() => {
  //   if(isAuthenticated) router.push('/student/auth')
  // }, [isAuthenticated]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isEmailEmptyError, setIsEmailEmptyError] = useState(false);

  const signinHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const student = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(asyncStudentSignin(student));
    if (errors.length === 0) {
      router.push("/student/auth");
    } else {
      router.push("/student/signin");
    }
  };

  return (
    <div
      className={`d-flex justify-content-around align-items-center  ${style.signinContainer}`}
      style={{ height: "88vh" }}
    >
      <div>
        <Image src={signIn} alt="" height={500}  className='imageShadow' />
        
      </div>
      <div
        className="bg-primary col-md-4 p-5  border rounded-2 border bg-white"
        style={{
          boxShadow: "5px 5px 10px #bebebe",
        }}
      >
        <h2 className="text-center mb-4 theme-text-colour">Login Form</h2>
        <form onSubmit={signinHandler} method="post">
          <CustomInput
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          {errors.includes("Wrong Password") && (
            <small
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "1.2vmax",
                fontFamily: "gilroy",
              }}
              ref={showWrongPassMsg}
            >
              Wrong Password
            </small>
          )}
          <p className="small">
            <Link href="/student/forget" className="theme-text-colour">
              Forget Password ?
            </Link>
          </p>
          <div className="d-grid">
            <button
              type="submit"
              className="btn text-light fw-bold"
              style={{ backgroundColor: "#28e1bf" }}
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-3">
          <p className="mb-0  text-center">
            Don't have an account?{" "}
            <Link href="/student/signup" className="theme-text-colour fw-bold">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
