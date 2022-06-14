import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="w-full p-0">
      <Header />
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
