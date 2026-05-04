"use client";

import React, { useState } from "react";

interface CodePlaygroundProps {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    url: string;
    responseStatusCode?: number;
    responseStatusText?: string;
    jsonResponse: any;
}

export function CodePlayground({
    method,
    url,
    responseStatusCode = 200,
    responseStatusText = "OK",
    jsonResponse,
}: CodePlaygroundProps) {
    const [activeTab, setActiveTab] = useState<"cURL" | "JavaScript" | "Python">("cURL");

    // Format the JSON with 2 spaces indents and stringify
    const formattedJson = JSON.stringify(jsonResponse, null, 2);

    return (
        <div className="sticky top-8">
            <div className="bg-[#1a1b26] rounded-2xl overflow-hidden shadow-2xl">
                {/* Tabs */}
                <div className="flex bg-[#14151f] border-b border-white/5">
                    <button
                        onClick={() => setActiveTab("cURL")}
                        className={`px-4 py-3 text-xs font-bold transition ${activeTab === "cURL"
                                ? "text-white border-b-2 border-blue-500 bg-white/5"
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                    >
                        cURL
                    </button>
                    <button
                        onClick={() => setActiveTab("JavaScript")}
                        className={`px-4 py-3 text-xs font-bold transition ${activeTab === "JavaScript"
                                ? "text-white border-b-2 border-blue-500 bg-white/5"
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                    >
                        JavaScript
                    </button>
                    <button
                        onClick={() => setActiveTab("Python")}
                        className={`px-4 py-3 text-xs font-bold transition ${activeTab === "Python"
                                ? "text-white border-b-2 border-blue-500 bg-white/5"
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                    >
                        Python
                    </button>
                </div>

                {/* Code Snippet - Switches based on active tab */}
                <div className="p-5 font-mono text-sm leading-[1.7] text-slate-300 overflow-x-auto">
                    {activeTab === "cURL" && (
                        <pre>
                            <span className="text-pink-400">curl</span> -X {method} \
                            <br />  <span className="text-green-300">"{url}"</span> \
                            <br />  -H <span className="text-green-300">"Accept: application/json"</span>
                        </pre>
                    )}

                    {activeTab === "JavaScript" && (
                        <pre>
                            <span className="text-pink-400">fetch</span>(<span className="text-green-300">"{url}"</span>, {"{"}
                            <br />  <span className="text-blue-300">method</span>: <span className="text-green-300">"{method}"</span>,
                            <br />  <span className="text-blue-300">headers</span>: {"{"}
                            <br />    <span className="text-green-300">"Accept"</span>: <span className="text-green-300">"application/json"</span>
                            <br />  {"}"}
                            <br />{"}"})
                            <br />  .then(<span className="text-amber-300">res</span> =&gt; res.json())
                            <br />  .then(<span className="text-amber-300">data</span> =&gt; console.log(data));
                        </pre>
                    )}

                    {activeTab === "Python" && (
                        <pre>
                            <span className="text-pink-400">import</span> requests
                            <br />
                            <br /><span className="text-blue-300">url</span> = <span className="text-green-300">"{url}"</span>
                            <br /><span className="text-blue-300">headers</span> = {"{"}<span className="text-green-300">"Accept"</span>: <span className="text-green-300">"application/json"</span>{"}"}
                            <br />
                            <br /><span className="text-blue-300">response</span> = requests.request(<span className="text-green-300">"{method}"</span>, url, headers=headers)
                            <br />
                            <br /><span className="text-amber-300">print</span>(response.json())
                        </pre>
                    )}
                </div>

                {/* Response Header */}
                <div className="bg-[#14151f] px-5 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest border-t border-white/5 flex items-center justify-between">
                    <span>Response</span>
                    <span
                        className={`${responseStatusCode >= 200 && responseStatusCode < 300
                                ? "text-green-400"
                                : "text-red-400"
                            } flex items-center gap-1`}
                    >
                        <span
                            className={`w-2 h-2 rounded-full ${responseStatusCode >= 200 && responseStatusCode < 300
                                    ? "bg-green-400"
                                    : "bg-red-400"
                                }`}
                        ></span>{" "}
                        {responseStatusCode} {responseStatusText}
                    </span>
                </div>

                {/* Response Content - Syntax highlighting for JSON is simplified here or we can just drop the raw stringified json with basic colors */}
                <div className="p-5 font-mono text-sm leading-[1.7] text-slate-300 overflow-x-auto max-h-[400px]">
                    <pre className="text-slate-300">
                        {/* Extremely simple JSON render without complex tokenization to avoid huge dependency */}
                        {formattedJson}
                    </pre>
                </div>
            </div>
        </div>
    );
}