import { EndpointHeader } from "../../components/api-docs/EndpointHeader";
import { ParameterTable } from "../../components/api-docs/ParameterTable";
import { CodePlayground } from "../../components/api-docs/CodePlayground";

export default function Academies() {
    return (
        <>
            {/* Documentation Content */}
            <div className="flex-1 lg:max-w-2xl">
                <EndpointHeader
                    title="List all school"
                    description="Retrieve a complete list of all registered educational institutions (Academies/Schools) within Kivotos. This endpoint returns their names, descriptions, and visual assets like crest logos."
                    method="GET"
                    endpoint="/api/v2/school"
                    pathParamInfo={{
                        title: "How to use query parameters?",
                        description: (
                            <>
                                Append a <code>?</code> at the end of the endpoint URL, followed by the parameter name and its value. Separate multiple parameters using the <code>&amp;</code> symbol.
                            </>
                        ),
                        exampleSegment: "/api/v2/school",
                        exampleValue: "?name=Valkyrie&limit=10",
                    }}
                />

                <ParameterTable
                    title="Query Parameters"
                    parameters={[
                        {
                            name: "name",
                            type: "string",
                            description: (
                                <>
                                    Filter schools by exact or partial name. Example: <code>Valkyrie</code>.
                                </>
                            ),
                        },
                        {
                            name: "sort",
                            type: "string",
                            description: (
                                <>
                                    Sort the results by a specific field. Available options: <code>name_asc</code>, <code>name_desc</code>.
                                </>
                            ),
                        },
                        {
                            name: "limit",
                            type: "integer",
                            description: (
                                <>
                                    Number of results to return. Default is <code>20</code>. Set to <code>0</code> to retrieve all.
                                </>
                            ),
                        }
                    ]}
                />
            </div>

            {/* Right Panel: Code Example */}
            <div className="xl:w-[480px] shrink-0">
                <CodePlayground
                    method="GET"
                    url="https://api/v2/school"
                    responseStatusCode={200}
                    responseStatusText="OK"
                    jsonResponse={
                        {
                            "status": "success",
                            "data": [
                                {
                                    "id": "valkyrie",

                                    "name": "Valkyrie",

                                    "description": "A school focused on public safety in Kivotos.",

                                    "logoUrl": "https://...",

                                    "bannerUrl": "https://...",

                                    "color": "#226F9C",

                                    "totalStudents": 12,

                                    "totalClubs": 2
                                }, {
                                    "id": "millennium",

                                    "name": "Millennium",

                                    "description": "A school focused on  Millennium Science School,",

                                    "logoUrl": "https://...",

                                    "bannerUrl": "https://...",

                                    "color": "#226F9C",

                                    "totalStudents": 12,

                                    "totalClubs": 2
                                }
                            ]
                        }
                    }
                />
            </div>
        </>
    );
}