import { EndpointHeader } from "../../components/api-docs/EndpointHeader";
import { ParameterTable } from "../../components/api-docs/ParameterTable";
import { CodePlayground } from "../../components/api-docs/CodePlayground";

export default function Clubs() {
    return (
        <>
            {/* Documentation Content */}
            <div className="flex-1 lg:max-w-2xl">
                <EndpointHeader
                    title="List all clubs"
                    description="Retrieve a list of all official and unofficial student clubs operating within the various academies in Kivotos. You can filter the clubs by their associated academy."
                    method="GET"
                    endpoint="/api/v2/clubs"
                    pathParamInfo={{
                        title: "How to use query parameters?",
                        description: (
                            <>
                                Filter clubs that belong to a specific academy by passing the academy id in the URL query string.
                            </>
                        ),
                        exampleSegment: "/api/v2/clubs",
                        exampleValue: "?academyId=abydos",
                    }}
                />

                <ParameterTable
                    title="Parameters"
                    parameters={[
                        {
                            name: "academyId",
                            type: "string",
                            description: "Filter clubs by their parent academy identifier.",
                        },
                        {
                            name: "search",
                            type: "string",
                            description: "Search for a club by partial or full name match.",
                        }
                    ]}
                />
            </div>

            {/* Right Panel: Code Example */}
            <div className="xl:w-[480px] shrink-0">
                <CodePlayground
                    method="GET"
                    url="https://api/v2/clubs?academyId=abydos"
                    responseStatusCode={200}
                    responseStatusText="OK"
                    jsonResponse={[
                        {
                            id: "foreclosure_task_force",
                            name: "Foreclosure Task Force",
                            academyId: "abydos",
                            academyName: "Abydos High School",
                            memberCount: 5,
                            description: "A club dedicated to repaying Abydos High School's massive debt through various means."
                        }
                    ]}
                />
            </div>
        </>
    );
}