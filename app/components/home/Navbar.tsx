import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 max-w-[1400px] mx-auto w-full relative z-10">
            <div className="flex items-center gap-10">
                <Link href="/">
                    <h1 className="text-[22px] font-black tracking-tight text-[#0088cc] whitespace-nowrap uppercase">
                        Schale Data Archive
                    </h1>
                </Link>
                <div className="hidden md:flex gap-8 text-[13px] font-bold text-slate-500 tracking-wide uppercase">
                    <a href="#" className="hover:text-slate-900 transition">Directory</a>
                    <a href="#" className="hover:text-slate-900 transition">Api Docs</a>
                    <a href="#" className="hover:text-slate-900 transition">Resources</a>
                </div>
            </div>
            <div className="flex items-center gap-5 text-[#00aaff]">
                <button className="hover:bg-blue-50 p-2 rounded-full transition">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </button>
                <button className="hover:bg-blue-50 p-2 rounded-full transition">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </button>
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ml-1 border-2 border-white shadow-sm flex items-center justify-center relative">
                    <Image src="/koyuki.png" alt="Profile" fill className="object-cover" />
                </div>
            </div>
        </nav>
    );
}