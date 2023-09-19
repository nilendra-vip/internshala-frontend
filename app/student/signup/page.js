"use client";
import CustomInput from "@/components/CustomInput/CustomInput";
import { asyncStudentSignup } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import signupPhoto from "@/public/images/Sign-up-amico.svg";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const page = () => {
  const showWrongPassMsg = useRef(null);

  const dispatch = useDispatch();

  const router = useRouter();
  const { isAuthenticated, errors } = useSelector(
    (state) => state.studentReducer
  );

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    city: "",
    gender: "", // Set a default value
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  const signupHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const newStudent = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      contact: formData.contact,
      city: formData.city,
      gender: formData.gender,
      email: formData.email,
      password: formData.password,
    };

    dispatch(asyncStudentSignup(newStudent));
  };
  if(errors.length == 0){
    router.push("/student/auth");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="">
      <div
        className={`d-flex justify-content-around align-items-center ${style.signinContainer}`}
      >
        <div>
          <Image
            src={signupPhoto}
            alt=""
            height={500}
            className="imageShadow"
          />
        </div>
        <div
          className="bg-primary col-md-4 px-5 py-2  border rounded-2 border bg-white"
          style={{
            boxShadow: "5px 5px 10px #bebebe",
          }}
        >
          <h2 className="text-center mb-4 theme-text-colour">
            Registration Form
          </h2>
          <form onSubmit={signupHandler} method="post">
            <div className="d-flex gap-5">
              <CustomInput
                label="Firstname"
                name="firstname"
                type="text"
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
                required
              />
              <CustomInput
                label="Lastname"
                name="lastname"
                type="text"
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
                required
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Gender
              </label>
              <select
                className="form-select form-select-md"
                aria-label=" select example"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div> */}
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label" className="text-dark">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Others"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <div className="d-flex gap-5">
              <CustomInput
                label="Contact Number"
                name="contact"
                type="text"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                required
              />
              <CustomInput
                label="City"
                name="city"
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                required
              />
            </div>

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
            <div className="d-grid">
              <button
                type="submit"
                className="btn text-light fw-bold"
                style={{ backgroundColor: "#28e1bf" }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-3">
            <p className="mb-0  text-center">
              I have an account !{" "}
              <Link
                href="/student/signin"
                className="theme-text-colour fw-bold"
              >
                {" "}
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
