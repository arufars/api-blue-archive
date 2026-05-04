import React from "react";
import { Navbar } from "../components/home/Navbar";
import { Sidebar } from "../components/api-docs/Sidebar";

export default function ApiDocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <Navbar />

            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 flex flex-col lg:flex-row gap-10 mt-8 pb-32">
                <Sidebar />

                {/* Main Content & Code Snippets */}
                <div className="flex-1 flex flex-col xl:flex-row gap-12">
                    {children}
                </div>
            </div>
        </div>
    );
}