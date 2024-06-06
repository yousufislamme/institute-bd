import SideBar from "@/components/SideBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex">
      {/* Include shared UI here e.g. a header or sidebar */}
      <SideBar />
      {children}
    </section>
  );
}
