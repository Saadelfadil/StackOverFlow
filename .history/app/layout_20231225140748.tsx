import React from "react";

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className="flex ">
      {children}
    </main>
  )
};

export default Layout;

