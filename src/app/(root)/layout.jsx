import React from "react";
import { onBoardUser } from "@/modules/auth/actions";
import Navbar from "@/modules/home/components/Navbar";
const Layout = async ({ children }) => {
  await onBoardUser();

  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
