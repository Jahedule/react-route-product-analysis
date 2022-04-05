import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-white py-5">
      <div className="gap-5 text-xl font-bold flex justify-center">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/reviews">Reviews</CustomLink>
        <CustomLink to="/dashboard">DashBoard</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
    </div>
  );
};

export default Header;