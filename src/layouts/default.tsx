import { Outlet, redirect } from "react-router-dom";

import Header from "@/components/Header";

export default function Default() {
  redirect("/home");

  return (
    <div className="container mx-auto space-y-4">
      <Header />
      <Outlet />
    </div>
  );
}
