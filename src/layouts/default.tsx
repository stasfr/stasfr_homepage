import { Outlet, redirect } from "react-router-dom";

import Header from "@/components/Header/Header";

export default function Default() {
  redirect("/home");

  return (
    <div className="mx-auto max-w-screen-md space-y-4 text-base">
      <Header />
      <div className="text-center">Dog model placeholder...</div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
