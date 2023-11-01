import { NavbarRoutes } from "@/components/navbar-routes";

import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b-text h-full flex items-center text-tett shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
