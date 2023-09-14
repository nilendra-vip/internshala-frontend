"use client";
import { asyncEmployeeSendMail } from "@/store/Actions/employeeActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { errors } = useSelector((state) => state.employeeReducer);
  const sendMailHandler = async () => {
    const employeeEmail = {
      email: "nilendrapatel1317@gmail.com",
    };
    await dispatch(asyncEmployeeSendMail(employeeEmail));
    if (errors.length === 1) {
      router.push("/employee/forget/otp");
    } else {
      console.log(errors)
      return;
    }
  };
  return (
    <div className="container mt-5">
      <button onClick={sendMailHandler} className="btn btn-danger fs-4">
        Send Mail
      </button>
    </div>
  );
};

export default page;
