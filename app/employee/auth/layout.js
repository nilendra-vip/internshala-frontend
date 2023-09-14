"use client";
import { asyncEmpolyeeAllInternships, asyncEmpolyeeAllJobs } from "@/store/Actions/employeeActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeeReducer);

  useEffect(() => {
    if (!isAuthenticated) router.push("/employee");
    if (isAuthenticated) {
      dispatch(asyncEmpolyeeAllInternships());
      dispatch(asyncEmpolyeeAllJobs());
    }
  }, [isAuthenticated]);

  return children;
};

export default layout;
