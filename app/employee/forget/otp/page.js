'use client'
import { asyncEmployeeOtpVerify } from "@/store/Actions/employeeActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const dispatch = useDispatch();
  const router = useRouter();
  const { errors } = useSelector((state) => state.employeeReducer);
  const sendOtpHandler = async () => {
    const newpwd = {
      email: "nilendrapatel1317@gmail.com",
      otp: "7403",
      password: "123456",
    };
    await dispatch(asyncEmployeeOtpVerify(newpwd));
    if (errors.length === 1) {
      router.push("/employee/signin");
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
