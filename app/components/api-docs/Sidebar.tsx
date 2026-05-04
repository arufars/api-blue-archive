"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    isActive(path)
      ? "block text-[14px] font-bold text-blue-600 border-l-2 border-blue-500 -ml-[2px] pl-4 py-1.5 bg-blue-50/50 transition"
      : "block text-[14px] font-medium text-slate-500 hover:text-slate-900 border-l-2 border-transparent -ml-[2px] pl-4 py-1.5 transition";

  return (
    <aside className="w-full lg:w-64 shrink-0 pr-8">
      <div className="sticky top-8">
        <h3 className="text-[11px] font-black tracking-widest text-slate-400 uppercase mb-3">Getting Started</h3>
        <ul className="mb-8 space-y-1 border-l-2 border-slate-100 ml-1">
          <li><Link href="/api-docs" className={linkClass("/api-docs")}>Introduction</Link></li>
          <li><Link href="#" className={linkClass("/api-docs/authentication")}>Authentication</Link></li>
          <li><Link href="#" className={linkClass("/api-docs/errors")}>Errors</Link></li>
        </ul>

        <h3 className="text-[11px] font-black tracking-widest text-slate-400 uppercase mb-3">Students</h3>
        <ul className="mb-8 space-y-1 border-l-2 border-slate-100 ml-1">
          <li><Link href="/api-docs/students" className={linkClass("/api-docs/students")}>List all students</Link></li>
          <li><Link href="/api-docs/student-by-id" className={linkClass("/api-docs/student-by-id")}>Get student by ID</Link></li>
        </ul>

        <h3 className="text-[11px] font-black tracking-widest text-slate-400 uppercase mb-3">Schools & Clubs</h3>
        <ul className="mb-8 space-y-1 border-l-2 border-slate-100 ml-1">
          <li><Link href="/api-docs/school" className={linkClass("/api-docs/school")}>List schools</Link></li>
          <li><Link href="/api-docs/clubs" className={linkClass("/api-docs/clubs")}>List clubs</Link></li>
        </ul>

        <h3 className="text-[11px] font-black tracking-widest text-slate-400 uppercase mb-3">Tactical Insights</h3>
        <ul className="mb-8 space-y-1 border-l-2 border-slate-100 ml-1">
          <li><Link href="#" className={linkClass("/api-docs/raids")}>Total Assaults</Link></li>
          <li><Link href="#" className={linkClass("/api-docs/equipment")}>Equipment</Link></li>
        </ul>
      </div>
    </aside>
  );
}