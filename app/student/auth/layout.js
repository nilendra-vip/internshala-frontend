"use client";
import { asyncAllInternships, asyncAllJobs } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (!isAuthenticated) router.push("/student");
    if (isAuthenticated) {
      dispatch(asyncAllInternships());
      dispatch(asyncAllJobs());
    }
  }, [isAuthenticated]);

  return children;
};

export default layout;
