'use client'
import { asyncStudentOtpVerify } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const dispatch = useDispatch();
  const router = useRouter();
  const { errors } = useSelector((state) => state.studentReducer);
  const sendOtpHandler = async () => {
    const newpwd = {
      email: "patelnilendra809@gmail.com",
      otp: "4602",
      password: "123456",
    };
    await dispatch(asyncStudentOtpVerify(newpwd));
    if (errors.length === 1) {
      router.push("/student/signin");
    } else {
      
      toast.error(JSON.stringify(errors));
      return;
    }
  };

  return (
    <div className="container mt-5">
      <button onClick={sendOtpHandler} className="btn btn-success">
        Change Paasword
      </button>
    </div>
  );
};

export default page;
