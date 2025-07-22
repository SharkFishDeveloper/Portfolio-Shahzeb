
import { Navigation } from "@/components/Navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Outlet />
    </div>
  );
};
