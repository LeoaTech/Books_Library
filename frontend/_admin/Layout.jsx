import React, { Suspense, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "../App.css";
import Header from "../components/_admin/Navbar/Header";
import Sidebar from "../components/_admin/Sidebar/Sidebar";
import Main from "./Main";
import routes from "../utiliz";

const AdminLayout = () => {
  const isSidebarOpen = false;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`flex h-screen bg-slate-900 dark:bg-gray-900 overflow-hidden;
      }`}
    >
      {/* <Sidebar /> */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* <Header /> */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <Outlet /> */}

        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <Outlet />
          </div>
        </main>
      </div>
      {/* <Suspense fallback={<></>}>
            <Routes>
              {routes.map((route, i) => {
                return (
                  <Route
                    key={i}
                    exact={true}
                    path={`/dashboard${route.path}`}
                    element={<route.component />}
                  />
                );
              })}
            </Routes>
          </Suspense> */}
      {/* </div> */}
      {/* <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <Outlet />
          </div>
        </main> */}
    </div>
  );
};

export default AdminLayout;
