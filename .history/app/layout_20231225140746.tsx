import React from "react";

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className="fl">
      {children}
    </main>
  )
};

export default Layout;

