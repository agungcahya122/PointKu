import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-auto bg-background">
      <div className="w-full min-h-screen overflow-auto"> {children} </div>
    </div>
  );
};

export default Layout;
