import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React basics", completed: false },
    { id: 2, text: "Practice Tailwind CSS", completed: true },
    { id: 3, text: "Build a todo app", completed: false },
  ]);
  const navigate = useNavigate();
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <button
        onClick={() => navigate(-1)}
        className=" cursor-pointer px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        ⟵ Back
      </button>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-600">Organize your tasks efficiently</p>
        </div>

        {/* Add Todo Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex space-x-4">
            <input
              type="text"
              value={newTodo}
              onChange={() => {}}
              placeholder="Add a new task..."
              className="grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={() => {}}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Task
            </button>
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => {}}
              className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Clear All
            </button>
            <button
              onClick={() => {}}
              className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded-lg hover:bg-green-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              Mark All Complete
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            All Tasks
          </button>
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Active
          </button>
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Completed
          </button>
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`p-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-150 ${
                  todo.completed ? "bg-green-50" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => {}}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      todo.completed
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300 hover:border-blue-500"
                    }`}
                  >
                    {todo.completed && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                  <span
                    className={`text-lg ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {}}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => {}}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Todo Stats */}
          <div className="px-5 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <div className="text-gray-600">
              <span className="font-medium">
                {todos.filter((t) => !t.completed).length}
              </span>{" "}
              tasks remaining
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => {}}
                className="text-sm text-gray-600 hover:text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded px-2 py-1"
              >
                Clear Completed
              </button>
              <button
                onClick={() => {}}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded px-2 py-1"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Empty State (hidden by default) */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 text-center hidden">
          <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No tasks yet
          </h3>
          <p className="text-gray-500">
            Add your first task using the form above
          </p>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Click on buttons to add functionality later</p>
        </div>
      </div>
    </div>
  );
}
