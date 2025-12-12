import { Link } from "react-router-dom";

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
      <div className="w-full flex justify-end space-x-4">
        <Link
          to={"/login"}
          className=" cursor-pointer px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-blue-500 focus:ring-offset-2 active:translate-y-0"
        >
          <div className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Login
          </div>
        </Link>

        <Link
          to={"/register"}
          className="cursor-pointer px-8 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-purple-500 focus:ring-offset-2 active:translate-y-0 border border-purple-500/20"
        >
          <div className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Register
          </div>
        </Link>
      </div>

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
