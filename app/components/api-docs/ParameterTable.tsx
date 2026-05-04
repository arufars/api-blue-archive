import React from "react";

export interface ParameterItem {
    name: string;
    type: string;
    required?: boolean;
    description: React.ReactNode;
}

interface ParameterTableProps {
    title?: string;
    parameters: ParameterItem[];
}

export function ParameterTable({ title = "Parameters", parameters }: ParameterTableProps) {
    if (!parameters || parameters.length === 0) return null;

    return (
        <>
            <h3 className="text-xl font-bold text-[#1a1a24] mb-4 border-b border-slate-100 pb-2">
                {title}
            </h3>
            <div className="overflow-x-auto mb-10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-100">
                            <th className="py-3 pr-6 text-sm font-bold text-slate-700 w-[25%] whitespace-nowrap">Name</th>
                            <th className="py-3 pr-6 text-sm font-bold text-slate-700 w-[15%] whitespace-nowrap">Type</th>
                            <th className="py-3 text-sm font-bold text-slate-700">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parameters.map((param, index) => (
                            <tr key={index} className="border-b border-slate-50 relative group">
                                <td className="py-4 pr-6 text-sm font-mono text-slate-800 align-top">
                                    {param.name}
                                    {param.required && (
                                        <div className="mt-1">
                                            <span className="text-[10px] text-red-500 font-sans font-bold uppercase tracking-wider bg-red-50 px-1.5 py-0.5 rounded">
                                                Required
                                            </span>
                                        </div>
                                    )}
                                </td>
                                <td className="py-4 pr-6 text-sm text-slate-500 align-top">{param.type}</td>
                                <td className="py-4 text-sm text-slate-500 align-top leading-relaxed">{param.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}