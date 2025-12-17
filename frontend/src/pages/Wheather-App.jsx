import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const WeatherApp = () => {
  const navigate = useNavigate();
  // Mock data for the UI (you'll replace with real API data)
  const [weatherData, setWeatherData] = useState({
    location: "New York, NY",
    temperature: 72,
    condition: "Sunny",
    humidity: 65,
    windSpeed: 8,
    precipitation: 10,
    feelsLike: 74,
    high: 76,
    low: 68,
    sunrise: "6:45 AM",
    sunset: "7:20 PM",
    forecast: [
      { day: "Mon", condition: "sunny", high: 75, low: 68 },
      { day: "Tue", condition: "partly-cloudy", high: 73, low: 67 },
      { day: "Wed", condition: "rainy", high: 70, low: 65 },
      { day: "Thu", condition: "cloudy", high: 71, low: 66 },
      { day: "Fri", condition: "sunny", high: 74, low: 67 },
    ],
    hourly: [
      { time: "Now", temp: 72, condition: "sunny" },
      { time: "1 PM", temp: 73, condition: "sunny" },
      { time: "2 PM", temp: 74, condition: "sunny" },
      { time: "3 PM", temp: 75, condition: "partly-cloudy" },
      { time: "4 PM", temp: 74, condition: "partly-cloudy" },
      { time: "5 PM", temp: 73, condition: "partly-cloudy" },
      { time: "6 PM", temp: 71, condition: "cloudy" },
    ],
    airQuality: "Good",
    uvIndex: "Moderate",
  });

  const [isCelsius, setIsCelsius] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toCelsius = (f) => Math.round(((f - 32) * 5) / 9);

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center content-center mb-5">
          <div className=" flex justify-center text-center content-center">
            <h1 className=" text-3xl font-bold text-gray-800 mb-4 md:mb-0">
              WeatherSphere
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search city or location..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-3.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Temperature Toggle */}
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
              <button
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                  !isCelsius ? "bg-blue-500 text-white" : "text-gray-700"
                }`}
                onClick={() => setIsCelsius(false)}
              >
                °F
              </button>
              <button
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                  isCelsius ? "bg-blue-500 text-white" : "text-gray-700"
                }`}
                onClick={() => setIsCelsius(true)}
              >
                °C
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Weather Card - Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">{weatherData.location}</h2>
                  <p className="text-blue-100">
                    Today,{" "}
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mt-8">
                <div className="mb-6 md:mb-0 md:mr-10 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="text-7xl font-bold">
                      {isCelsius
                        ? toCelsius(weatherData.temperature)
                        : weatherData.temperature}
                    </span>
                    <span className="text-4xl mt-2">
                      °{isCelsius ? "C" : "F"}
                    </span>
                  </div>
                  <p className="text-xl mt-2 capitalize">
                    {weatherData.condition}
                  </p>
                  <p className="text-blue-100 mt-1">
                    Feels like{" "}
                    {isCelsius
                      ? toCelsius(weatherData.feelsLike)
                      : weatherData.feelsLike}
                    °
                  </p>
                </div>

                <div className="flex-1 flex justify-center">
                  {/* Weather Icon */}
                  <div className="w-48 h-48 flex items-center justify-center">
                    <div className="relative">
                      {/* Sun icon for sunny weather */}
                      <div className="w-32 h-32 bg-yellow-300 rounded-full shadow-lg"></div>
                      <div className="absolute top-0 left-0 w-full h-full animate-pulse">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-10 bg-yellow-400 rounded-full"
                            style={{
                              top: "50%",
                              left: "50%",
                              transform: `translate(-50%, -50%) rotate(${
                                i * 30
                              }deg) translateY(-70px)`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weather Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <p className="text-blue-100 text-sm">Humidity</p>
                  <p className="text-xl font-semibold mt-1">
                    {weatherData.humidity}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-blue-100 text-sm">Wind</p>
                  <p className="text-xl font-semibold mt-1">
                    {weatherData.windSpeed} mph
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-blue-100 text-sm">Precipitation</p>
                  <p className="text-xl font-semibold mt-1">
                    {weatherData.precipitation}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-blue-100 text-sm">High / Low</p>
                  <p className="text-xl font-semibold mt-1">
                    {isCelsius ? toCelsius(weatherData.high) : weatherData.high}
                    ° /{" "}
                    {isCelsius ? toCelsius(weatherData.low) : weatherData.low}°
                  </p>
                </div>
              </div>
            </div>

            {/* Hourly Forecast */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Hourly Forecast
              </h3>
              <div className="flex overflow-x-auto pb-4 space-x-6 scrollbar-hide">
                {weatherData.hourly.map((hour, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center min-w-[70px]"
                  >
                    <p className="text-gray-600 font-medium">{hour.time}</p>
                    <div className="my-3 text-3xl">
                      {hour.condition === "sunny" && "☀️"}
                      {hour.condition === "partly-cloudy" && "⛅"}
                      {hour.condition === "cloudy" && "☁️"}
                      {hour.condition === "rainy" && "🌧️"}
                    </div>
                    <p className="text-xl font-bold text-gray-800">
                      {isCelsius ? toCelsius(hour.temp) : hour.temp}°
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Day Forecast */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                5-Day Forecast
              </h3>
              <div className="space-y-4">
                {weatherData.forecast.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center w-32">
                      <span className="font-medium text-gray-800">
                        {day.day}
                      </span>
                    </div>
                    <div className="flex items-center justify-center flex-1 mx-4">
                      <div className="text-2xl mr-4">
                        {day.condition === "sunny" && "☀️"}
                        {day.condition === "partly-cloudy" && "⛅"}
                        {day.condition === "cloudy" && "☁️"}
                        {day.condition === "rainy" && "🌧️"}
                      </div>
                      <span className="text-gray-600 capitalize text-sm">
                        {day.condition.replace("-", " ")}
                      </span>
                    </div>
                    <div className="flex items-center w-24 justify-end">
                      <span className="font-bold text-gray-800 mr-3">
                        {isCelsius ? toCelsius(day.high) : day.high}°
                      </span>
                      <span className="text-gray-500">
                        {isCelsius ? toCelsius(day.low) : day.low}°
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="lg:col-span-1">
            {/* Sunrise & Sunset */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Sunrise & Sunset
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <span className="text-2xl">🌅</span>
                  </div>
                  <div>
                    <p className="text-gray-600">Sunrise</p>
                    <p className="text-xl font-bold">{weatherData.sunrise}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <span className="text-2xl">🌇</span>
                  </div>
                  <div>
                    <p className="text-gray-600">Sunset</p>
                    <p className="text-xl font-bold">{weatherData.sunset}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Air Quality */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Air Quality</h3>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {weatherData.airQuality}
                </span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Good</span>
                  <span>Moderate</span>
                  <span>Unhealthy</span>
                </div>
                <div className="h-3 bg-linear-to-r from-green-400 via-yellow-400 to-red-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-sm">
                Air quality is satisfactory, and air pollution poses little or
                no risk.
              </p>
            </div>

            {/* UV Index */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">UV Index</h3>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  {weatherData.uvIndex}
                </span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Low</span>
                  <span>Moderate</span>
                  <span>High</span>
                </div>
                <div className="h-3 bg-linear-to-r from-green-400 via-yellow-400 to-red-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-sm">
                Medium risk of harm from unprotected sun exposure.
              </p>
            </div>

            {/* Recent Locations */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Recent Locations
              </h3>
              <div className="space-y-4">
                {[
                  "Los Angeles, CA",
                  "Chicago, IL",
                  "Miami, FL",
                  "Seattle, WA",
                ].map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-800">
                        {location}
                      </span>
                    </div>
                    <span className="text-gray-600">72°</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Weather data is for demonstration purposes. Connect to a weather API
            for real data.
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} WeatherSphere. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WeatherApp;
