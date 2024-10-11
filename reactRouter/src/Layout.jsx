import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./ImportFiles";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
