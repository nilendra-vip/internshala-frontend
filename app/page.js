'use client';
import Link from "next/link";
import React, { useEffect } from "react";
import style from "./page.module.css";
import HomeNavbar from "@/components/Navbar/homeNavbar";

export const metadata = {
  title: "Homepage",
};

const page = () => {
  
  
  return (
    <div className={`${style.homepage}`} >
      <HomeNavbar />
    </div>
  );
};

export default page;
