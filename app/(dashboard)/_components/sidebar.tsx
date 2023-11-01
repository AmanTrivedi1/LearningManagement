import { Logo } from "./Logo";
import { SidebarRoutes } from "./sidebar-routes";

const Sidebar = () => {
  return (
    <>
      <div className="h-full border-r border-backgroundcolor flex flex-col overflow-y-auto  shadow-sm">
        <div className="p-6">
          <Logo />
        </div>
        <div className="flex flex-col  w-full">
          <SidebarRoutes />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
