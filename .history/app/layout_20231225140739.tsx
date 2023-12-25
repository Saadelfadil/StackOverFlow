import React from "react";

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className="t">
      {children}
    </main>
  )
};

export default Layout;

