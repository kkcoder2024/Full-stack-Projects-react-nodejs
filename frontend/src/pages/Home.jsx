import { Link } from "react-router-dom";
import { AuthContent } from "../components/AuthContent";

export default function Home() {
  const projects = [
    { name: "Weather App", color: "from-blue-400 to-cyan-400", to: "#" },
    { name: "Todo App", color: "from-green-400 to-emerald-500", to: "/todo" },
    { name: "Search App", color: "from-purple-400 to-pink-500", to: "#" },
    {
      name: "Personal Portfolio",
      color: "from-orange-400 to-red-500",
      to: "#",
    },
    { name: "Notes App", color: "from-yellow-400 to-amber-500", to: "#" },
    { name: "Blog / CMS", color: "from-indigo-400 to-violet-500", to: "#" },
    { name: "Task Manager", color: "from-teal-400 to-blue-500", to: "#" },
    { name: "E-commerce Store", color: "from-rose-400 to-pink-500", to: "#" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <AuthContent />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Dashboard
          </h1>
          <p className="text-xl text-gray-300">
            Click on any project to explore
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              to={project.to}
              key={index}
              className={`block p-6 rounded-2xl bg-linear-to-br ${project.color} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 active:scale-95`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <div className="inline-flex items-center text-white/90">
                  <span>View Project</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Total Projects: {projects.length}
            </h3>
            <p className="text-gray-300">
              Each project is built with modern React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
