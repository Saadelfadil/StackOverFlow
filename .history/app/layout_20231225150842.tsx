import React from "react";
import "./globles.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-cente">
      {children}
    </main>
  );
};

export default Layout;
