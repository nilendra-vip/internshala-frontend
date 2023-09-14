'use client';
import Link from "next/link";
import React, { useEffect } from "react";

export const metadata = {
  title: "Homepage",
};

const page = () => {
  
  
  return (
    <div>
      <h1>Global Homepage</h1>
      <br />
      <Link href="/student" className="btn btn-primary">Student</Link>
      <br /><br />
      <Link href="/employee" className="btn btn-primary">Employee</Link>
    </div>
  );
};

export default page;
