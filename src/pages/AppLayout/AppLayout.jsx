import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Sidebar />
      <Header />
      <main className=" bg-gray-100">
        <section className="container py-10">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default AppLayout;
