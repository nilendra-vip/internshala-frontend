"use client";
import { asyncStudentOtpVerify } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "@/components/CustomInput/CustomInput";
import style from "../page.module.css";
import Image from "next/image";
import forgetPwdPhoto from "@/public/images/Enter-OTP-rafiki.svg";
import Link from "next/link";
import { toast } from "react-toastify";

const page = (props) => {
  const studentEmail = props.searchParams.email;
  const dispatch = useDispatch();
  const router = useRouter();
  const { errors, otp } = useSelector((state) => state.studentReducer);

  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [wrongOtp, setWrongOtp] = useState(false)

  const [formData, setFormData] = useState({
    email: studentEmail,
    otp: "",
    password1: "",
    password2: "",
  });

  const verifyOtpHandler = (e) => {
    e.preventDefault();
    if (otp === formData.otp) {
      setIsOtpVerified(true);
    } else {
      setIsOtpVerified(false);
      setWrongOtp(true)
    }
  };
  const newPwdHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const newpwd = {
      email: formData.email,
      otp: formData.otp,
      password: formData.password1,
    };

    await dispatch(asyncStudentOtpVerify(newpwd));
    setWrongOtp(false)
    if (errors.length === 0) {
      router.push("/student/signin");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };
  

  return (
    <div
      className={`d-flex justify-content-around align-items-center  ${style.signinContainer}`}
      style={{ height: "88vh" }}
    >
      <div>
        <Image
          src={forgetPwdPhoto}
          alt=""
          height={500}
          className="imageShadow"
        />
      </div>
      <div
        className="bg-primary col-md-4 p-5  border rounded-2 border bg-white"
        style={{
          boxShadow: "5px 5px 10px #bebebe",
        }}
      >
        <h2 className="text-center  theme-text-colour">
          {isOtpVerified ? "New Password" : "Verify OTP"}
        </h2>
        {/* <small className="d-inline-block mb-4 text-center">Please enter your e-mail address. You will receive an e-mail along with an OTP which can be used to reset your password.</small> */}
        {!isOtpVerified ? (
          <div>
            <form onSubmit={verifyOtpHandler} method="post">
              <CustomInput
                label="Enter OTP"
                name="otp"
                type="text"
                value={formData.otp}
                onChange={(e) =>
                  setFormData({ ...formData, otp: e.target.value })
                }
                required
              />
              {wrongOtp ? (<small className="d-inline-block text-danger mb-3 text-center">Wrong OTP ! Please enter correct OTP !</small>): ""}
              <div className="d-grid">
                <button
                  type="submit"
                  className= "btn text-light fw-bold"
                  style={{ backgroundColor: "#28e1bf" }}
                >
                  Confirm OTP
                </button>
              </div>
            </form>
            <div className="mt-3">
              <p className="mb-0  text-center">
                Did not receive OTP{" "}
                <Link
                  href="/student/forget"
                  className="theme-text-colour fw-bold"
                >
                  {" "}
                  Resend OTP
                </Link>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        {isOtpVerified ? (
          <form onSubmit={newPwdHandler} method="post" className="mt-4">
            <CustomInput
              label="New Password"
              name="password1"
              type="password"
              value={formData.password1}
              onChange={(e) =>
                setFormData({ ...formData, password1: e.target.value })
              }
              required
            />
            {/* <CustomInput
              label="Confirm Password"
              name="password2"
              type="password"
              value={formData.password2}
              onChange={(e) =>
                setFormData({ ...formData, password2: e.target.value })
              }
              required
            /> */}

            <div className="d-grid">
              <button
                type="submit"
                className="btn text-light fw-bold"
                style={{ backgroundColor: "#28e1bf" }}
              >
                Change Password
              </button>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default page;
