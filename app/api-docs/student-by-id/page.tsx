import { EndpointHeader } from "../../components/api-docs/EndpointHeader";
import { ParameterTable } from "../../components/api-docs/ParameterTable";
import { CodePlayground } from "../../components/api-docs/CodePlayground";

export default function GetStudentById() {
  return (
    <>
      {/* Documentation Content */}
      <div className="flex-1 lg:max-w-2xl">
        <EndpointHeader
          title="Get student by ID"
          description="Retrieve detailed information about a specific student, including their base stats, skills, combat class, and role, using their unique identifier."
          method="GET"
          endpoint="/api/v2/students/{id}"
          pathParamInfo={{
            title: "Using Path Parameters",
            description: "To specify an ID, place it directly in the URL route path replacing the {id} segment.",
            exampleSegment: "/api/v2/students/",
            exampleValue: "1001",
          }}
        />

        <ParameterTable
          title="Path Parameters"
          parameters={[
            {
              name: "id",
              type: "integer",
              required: true,
              description: (
                <>
                  The unique identifier of the student. Example: <code>1001</code>
                </>
              ),
            },
          ]}
        />
      </div>

      {/* Right Panel: Code Example */}
      <div className="xl:w-[480px] shrink-0">
        <CodePlayground
          method="GET"
          url="https://api/v2/students/1001"
          responseStatusCode={200}
          responseStatusText="OK"
          jsonResponse={{
            id: 1001,
            name: "Sunaookami Shiroko",
            academy: "Abydos High School",
            club: "Foreclosure Task Force",
            role: "Attacker",
            combat_class: "Striker",
            damage_type: "Explosion",
            armor_type: "Light Armor",
            stats: {
              hp: 2145,
              atk: 342,
              def: 15,
            },
          }}
        />
      </div>
    </>
  );
}