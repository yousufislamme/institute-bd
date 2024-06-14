import SideBar from "@/app/SideBar";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex">
      {/* Include shared UI here e.g. a header or sidebar */}
      <SideBar />
      {children}
      <Toaster />
    </section>
  );
}
