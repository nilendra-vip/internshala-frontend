"use client";
import { asyncStudentSendMail } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { errors } = useSelector((state) => state.studentReducer);
  const sendMailHandler = async () => {
    const studentEmail = {
      email: "patelnilendra809@gmail.com",
    };
    await dispatch(asyncStudentSendMail(studentEmail));
    if (errors.length === 1) {
      router.push("/student/forget/otp");
    } else {
      toast.error(JSON.stringify(errors));
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
