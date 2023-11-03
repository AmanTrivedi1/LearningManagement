import Sidebar from "./_components/sidebar";
import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full bg-dark">
        <div className="h-[60px]  md:pl-56 fixed inset-y-0 w-full z-50">
          <Navbar />
        </div>
        <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
          <Sidebar />
        </div>
        <main className="md:pl-72 pt-[60px] h-full">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
