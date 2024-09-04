import Sidebar from "@/Components/adminComponents/Sidebar";
import React from "react";
import Header from "@/Components/adminComponents/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
