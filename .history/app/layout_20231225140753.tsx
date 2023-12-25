import React from "react";

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className="flex min-h">
      {children}
    </main>
  )
};

export default Layout;

