import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4  hover:opacity-75 transition">
        <Menu className="text-text" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-dark ">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
