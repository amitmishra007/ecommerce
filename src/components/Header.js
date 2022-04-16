import React from "react";
import Mainbar from "./Mainbar";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
const Header = () => {
  return (
    <>
      {/* topbar */}
      <Topbar />

      {/* mainbar */}
      <Mainbar />
      {/* navbar */}
      <Navbar />
    </>
  );
};

export default Header;
