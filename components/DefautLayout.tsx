import React, { ReactNode, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import NavbarTest from "./NavbarTest/NavbarTest";
import Footer from "./footer/footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  let navbarComponent;

  if (currentPath === '/') {
    navbarComponent = <Navbar />;
  } else {
    navbarComponent = <NavbarTest />;
  }
  return (
    <div className="default-layout">
      {navbarComponent}
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
