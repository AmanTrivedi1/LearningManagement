import { NavbarRoutes } from "@/components/navbar-routes";

import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className=" h-full md:ml-16 md:pl-0 pl-4 bg-dark border-b border-backgroundcolor flex items-center  shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
