import React from "react";
import AdminLayout from "./Layout";
import Sidebar from "../components/_admin/Sidebar/Sidebar";
import Header from "../components/_admin/Navbar/Header";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const isSidebarOpen = false;

  return <AdminLayout />;
};

export default AdminDashboard;
