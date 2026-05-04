import { EndpointHeader } from "../../components/api-docs/EndpointHeader";
import { ParameterTable } from "../../components/api-docs/ParameterTable";
import { CodePlayground } from "../../components/api-docs/CodePlayground";

export default function Students() {
  return (
    <>
      <div className="flex-1 lg:max-w-2xl">
        <EndpointHeader
          title="List all students"
          description="Retrieve a list of all registered students in Kivotos. You can use query parameters to filter the results by academy, club, or combat role."
          method="GET"
          endpoint="/api/v2/students"
          pathParamInfo={{
            title: "How to use query parameters?",
            description: (
              <>
                Append a <code>?</code> at the end of the endpoint URL, followed by the parameter name and its value. Separate multiple parameters using the <code>&amp;</code> symbol.
              </>
            ),
            exampleSegment: "/api/v2/students",
            exampleValue: "?academy=Abydos&limit=5",
          }}
        />

        <ParameterTable
          title="Parameters"
          parameters={[
            {
              name: "academy",
              type: "string",
              description: "Filter students by academy name.",
            },
            {
              name: "limit",
              type: "integer",
              description: (
                <>
                  Number of results to return. Default: <code>20</code>
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
          url="https://api/v2/students"
          responseStatusCode={200}
          responseStatusText="OK"
          jsonResponse={
            {
              "status": "success",
              "data": [
                {
                  "id": "char_konoka_01",

                  "name": "Konoka",
                  "fullName": "Shima Konoka",
                  "nameJp": "志真(しま) コノカ",

                  "school": {
                    "id": "valkyrie",
                    "name": "Valkyrie",
                    "iconUrl": "https://..."
                  },

                  "club": {
                    "id": "public_peace_bureau",
                    "name": "Public Peace Bureau"
                  },

                  "role": "Tank",
                  "position": "Front",

                  "damageType": "Mystic",
                  "armorType": "Light",

                  "combatClass": "Striker",

                  "themeColor": "#226F9C",

                  "profile": {
                    "age": "16",
                    "birthday": "August 19",
                    "height": "165cm"
                  },

                  "assets": {
                    "profileImageUrl": "https://...",
                    "schoolIconUrl": "https://..."
                  }
                }
              ]
            }
          }
        />
      </div>
    </>
  );
}