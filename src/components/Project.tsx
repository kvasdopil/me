import { useParams, useNavigate } from "react-router-dom";
import InstabeeFleetDashboard from "../projects/InstabeeFleetDashboard";
import InstabeeGeospatialRanking from "../projects/InstabeeGeospatialRanking";

function ProjectLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Return button */}
      <button
        onClick={() => navigate("/")}
        className="cursor-pointer fixed top-6 left-6 z-10 inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-md shadow-md hover:shadow-lg border border-gray-200"
      >
        ← Back to Home
      </button>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl w-full">
          {/* Project content - now self-contained */}
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const renderProject = () => {
    switch (projectId) {
      case "instabee-fleet-dashboard":
        return <InstabeeFleetDashboard />;
      case "instabee-geospatial-ranking":
        return <InstabeeGeospatialRanking />;
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900 mb-4">Project Not Found</h1>
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        );
    }
  };

  return <ProjectLayout>{renderProject()}</ProjectLayout>;
}
