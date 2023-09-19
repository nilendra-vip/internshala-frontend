import Link from "next/link";
import React from "react";

const logo = () => {
  return (
    <div>
      <Link href="/" style={{textDecoration:'none' ,color:"black"}}>
        <h1>
          Jobi<span style={{ color: "#28e1bf" }}>fy</span>
        </h1>
      </Link>
    </div>
  );
};

export default logo;
