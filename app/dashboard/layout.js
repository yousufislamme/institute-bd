import SideBar from "@/app/SideBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex mt-10">
      {/* Include shared UI here e.g. a header or sidebar */}
      <SideBar />
      {children}
      <Toaster />
    </section>
  );
}
