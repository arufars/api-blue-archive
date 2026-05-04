import Image from "next/image";

export function HeroMockup() {
    return (
        <div className="flex-1 relative w-full flex justify-end items-end h-[500px]">
            {/* Code Window */}
            <div className="w-full max-w-[540px] bg-white rounded-[20px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100/60 z-10 mr-12 mb-10">
                {/* Window Header */}
                <div className="bg-white flex items-center gap-3 px-5 py-4 border-b border-slate-50">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    </div>
                    <div className="flex-1 text-center text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                        GET /API/V2/STUDENTS/SHIROKO
                    </div>
                    <div className="w-9" /> {/* Spacer for centering */}
                </div>

                {/* JSON Content */}
                <div className="p-8 font-mono text-[14px] leading-[1.8] overflow-x-auto bg-[#fafcff]">
                    <pre className="text-slate-600 font-medium">
                        <span className="text-slate-400">{"{"}</span>
                        <br />  <span className="text-blue-500">"id"</span>: <span className="text-amber-600">1001</span>,
                        <br />  <span className="text-blue-500">"name"</span>: <span className="text-sky-500">"Sunaookami Shiroko"</span>,
                        <br />  <span className="text-blue-500">"academy"</span>: <span className="text-sky-500">"Abydos High School"</span>,
                        <br />  <span className="text-blue-500">"club"</span>: <span className="text-sky-500">"Foreclosure Task Force"</span>,
                        <br />  <span className="text-blue-500">"role"</span>: <span className="text-sky-500">"Attacker"</span>,
                        <br />  <span className="text-blue-500">"combat_class"</span>: <span className="text-sky-500">"Striker"</span>,
                        <br />  <span className="text-blue-500">"damage_type"</span>: <span className="text-sky-500">"Explosion"</span>,
                        <br />  <span className="text-blue-500">"armor_type"</span>: <span className="text-sky-500">"Light Armor"</span>,
                        <br />  <span className="text-blue-500">"stats"</span>: <span className="text-slate-400">{"{"}</span>
                        <br />    <span className="text-blue-500">"hp"</span>: <span className="text-amber-600">2145</span>,
                        <br />    <span className="text-blue-500">"atk"</span>: <span className="text-amber-600">342</span>,
                        <br />    <span className="text-blue-500">"def"</span>: <span className="text-amber-600">15</span>
                        <br />  <span className="text-slate-400">{"}"}</span>
                        <br /><span className="text-slate-400">{"}"}</span>
                    </pre>
                </div>
            </div>

            {/* Koyuki Image */}
            <div className="absolute right-[-20px] bottom-[-40px] w-[340px] z-20 pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] animate-[bounce_5s_linear_infinite]">
                <Image
                    src="/koyuki.png"
                    alt="Koyuki"
                    width={500}
                    height={700}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>
        </div>
    );
}