import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { LayoutProps } from "../types/types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col max-w-2xl items-center w-full mx-auto">
        {/*  */}
        <Navbar />
        {/*  */}
        <main className="w-full pb-12 px-4">{children}</main>
        {/*  */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
