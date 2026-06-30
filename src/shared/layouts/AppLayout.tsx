import Navbar from "./navbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F1EA]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-6">{children}</main>
    </div>
  );
}
