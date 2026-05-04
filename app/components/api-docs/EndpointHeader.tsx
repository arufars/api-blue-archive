import React from "react";

interface EndpointHeaderProps {
    title: string;
    description: React.ReactNode;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    endpoint: string;
    pathParamInfo?: {
        title: string;
        description: React.ReactNode;
        exampleSegment: string;
        exampleValue: string;
    };
}

export function EndpointHeader({
    title,
    description,
    method,
    endpoint,
    pathParamInfo,
}: EndpointHeaderProps) {
    return (
        <>
            <h1 className="text-4xl font-bold text-[#1a1a24] mb-4">{title}</h1>
            <div className="text-slate-600 mb-6 leading-relaxed text-[15px]">
                {description}
            </div>

            {pathParamInfo && (
                <div className="bg-[#fff8f0] border border-amber-200 rounded-xl p-5 mb-10 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                        </svg>
                        {pathParamInfo.title}
                    </h4>
                    <div className="text-[13px] text-slate-600 leading-relaxed mb-3">
                        {pathParamInfo.description}
                    </div>
                    <div className="bg-white border border-amber-100 px-4 py-2.5 rounded-lg text-[13px] font-mono text-slate-500 shadow-sm">
                        {pathParamInfo.exampleSegment}
                        <span className="text-amber-600 font-bold">{pathParamInfo.exampleValue}</span>
                    </div>
                </div>
            )}

            <div className="flex items-center gap-3 mb-8">
                <span
                    className={`font-bold px-3 py-1 rounded-md text-xs uppercase tracking-wide ${method === "GET"
                            ? "bg-blue-100 text-blue-700"
                            : method === "POST"
                                ? "bg-green-100 text-green-700"
                                : "bg-slate-100 text-slate-700"
                        }`}
                >
                    {method}
                </span>
                <code className="text-sm font-mono text-slate-700 font-bold bg-slate-50 px-2 py-1 rounded border border-slate-100">
                    {endpoint}
                </code>
            </div>
        </>
    );
}