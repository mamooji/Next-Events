import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <div className=" relative  min-h-screen bg-slate-800">
        <Header />
        <main className=" mx-auto pb-36 sm:max-w-screen-lg">{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
