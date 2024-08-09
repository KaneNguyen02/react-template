import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="base-layout">
      <Header />
      <main className="min-h-screen container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
