import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import LoginAs from "@/components/MaterialUi/login";
import Logo from '@/components/Navbar/Logo';

const navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <Logo />
      <div className={style.navLinks}>
        <LoginAs for="Login" />
        <LoginAs for="SignUp" />
      </div>
    </div>
  );
};

export default navbar;
