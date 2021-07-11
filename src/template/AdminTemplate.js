import React, { useEffect, useState } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import AppBar from "../components/AppBar";
const AdminLayout = (props) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <AppBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {props.children}
    </>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("userAdmin"))
          return (
            <AdminLayout>
              <Component propsComponent={propsComponent} />
            </AdminLayout>
          );
        else {
          return <Redirect to="/admin" />;
        }
      }}
    />
  );
}
