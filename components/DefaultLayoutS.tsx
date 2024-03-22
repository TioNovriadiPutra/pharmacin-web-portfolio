import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { FooterContent } from "./Footer";
import NavbarTest from "./NavbarTest/NavbarTest";
interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayoutSecond: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="default-layout">
      <NavbarTest></NavbarTest>
      <main>{children}</main>
      <FooterContent></FooterContent>
    </div>
  );
};

export default DefaultLayoutSecond;
