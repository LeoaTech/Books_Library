import React, { Suspense, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "../App.css";
import Header from "../components/_admin/Navbar/Header";
import Sidebar from "../components/_admin/Sidebar/Sidebar";


const AdminLayout = () => {
  const isSidebarOpen = false;
  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      {/* <Sidebar /> */}
      <Sidebar />

      <div className="flex flex-col flex-1 w-full bg-neutral-100">
        {/* <Header /> */}
        <Header />

        {/* <Main>
          <Suspense fallback={<></>}>
            <Routes>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/admin${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
            </Routes>
          </Suspense>
        </Main> */}
      </div>
    </div>
  );
};

export default AdminLayout;