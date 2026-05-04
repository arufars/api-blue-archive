import Link from "next/link";

export function HeroText() {
    return (
        <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] text-xs font-bold text-[#00aaff] tracking-wide uppercase mb-10">
                <span className="w-2 h-2 rounded-full bg-[#00aaff]"></span>
                v2.0 LIVE
            </div>

            <h1 className="text-5xl lg:text-[72px] font-bold tracking-tight text-[#1a1a24] leading-[1.1] mb-6">
                Kivotos Student <br /> Database
            </h1>

            <p className="text-[17px] text-slate-500 leading-relaxed mb-12 max-w-[480px] font-medium">
                Your go-to REST API for Blue Archive student data. Easily fetch character stats, academy details, and club affiliations. Built by a Sensei, for all Senseis out there!
            </p>

            <div className="flex flex-wrap gap-5">
                <Link href="/api-docs" className="cursor-pointer">
                    <button className="flex items-center gap-2 bg-[#00aaff] hover:bg-[#0099e6] text-white px-7 py-3.5 rounded-xl font-bold transition shadow-lg shadow-blue-200/50 cursor-pointer">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        Explore API Docs
                    </button>

                </Link>
                <button className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-100 px-7 py-3.5 rounded-xl font-bold transition shadow-sm">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    View on GitHub
                </button>
            </div>
        </div>
    );
}