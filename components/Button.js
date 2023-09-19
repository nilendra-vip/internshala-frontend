import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";

const button = ({link , btnValue}) => {
  return (
    <>
      <Link href={link}>
        <Button
          variant="contained"
          className="theme-bg-colour"
          style={{
            backgroundColor: "#28e1bf",
            fontSize: "15px",
            textTransform: "capitalize",
          }}
        >
          {btnValue}
        </Button>
      </Link>
    </>
  );
};

export default button;
