"use client";
import { asyncCurrentStudent, asyncStudentSendMail, resetErrors } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomInput from "@/components/CustomInput/CustomInput";
import style from "./page.module.css";
import Image from "next/image";
import forgetPwdPhoto from "@/public/images/Forgot-password-bro.svg";
import Link from "next/link";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { errors } = useSelector((state) => state.studentReducer);


  const [formData, setFormData] = useState({
    email: "",
  });

  const sendMailHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const studentEmail = {
      email: formData.email,
    };

    if (errors.length > 0) {
      dispatch(asyncStudentSendMail(studentEmail));
    }
    
  };
  if(errors.length == 0){
    router.push("/student/forget/otp?email=" + formData.email);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Dispatch the action to reset errors when the component mounts
    dispatch(resetErrors());
  }, []);

  return (
    <div
      className={`d-flex justify-content-around align-items-center  ${style.signinContainer}`}
      style={{ height: "88vh" }}
    >
      <div>
        <Image src={forgetPwdPhoto} alt="" height={500} className='imageShadow' />
      </div>
      <div
        className="bg-primary col-md-4 p-5  border rounded-2 border bg-white"
        style={{
          boxShadow: "5px 5px 10px #bebebe",
        }}
      >
        <h2 className="text-center  theme-text-colour">Forget Password</h2>
        <small className="d-inline-block mb-4 text-center">Please enter your e-mail address. You will receive an e-mail along with an OTP which can be used to reset your password.</small>
        <form onSubmit={sendMailHandler} method="post">
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
          <div className="d-grid">
            <button
              type="submit"
              className="btn text-light fw-bold"
              style={{ backgroundColor: "#28e1bf" }}
            >
              Send OTP
            </button>
          </div>
        </form>
        <div className="mt-3">
          <p className="mb-0  text-center">
            Know Password!{" "}
            <Link href="/student/signin" className="theme-text-colour fw-bold">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
