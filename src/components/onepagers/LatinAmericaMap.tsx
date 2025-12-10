import { MapPin } from "lucide-react";

export const LatinAmericaMap = () => {
  const countries = [
    { name: "Mexico", universities: 18, x: "15%", y: "25%" },
    { name: "Colombia", universities: 12, x: "25%", y: "45%" },
    { name: "Venezuela", universities: 8, x: "30%", y: "40%" },
    { name: "Brazil", universities: 25, x: "45%", y: "65%" },
    { name: "Peru", universities: 10, x: "20%", y: "65%" },
    { name: "Ecuador", universities: 6, x: "22%", y: "50%" },
    { name: "Argentina", universities: 15, x: "35%", y: "85%" },
    { name: "Chile", universities: 12, x: "25%", y: "80%" },
    { name: "Uruguay", universities: 4, x: "40%", y: "80%" },
    { name: "Costa Rica", universities: 5, x: "18%", y: "35%" },
    { name: "Panama", universities: 4, x: "20%", y: "38%" },
    { name: "Guatemala", universities: 6, x: "12%", y: "30%" },
    { name: "Nicaragua", universities: 3, x: "15%", y: "33%" },
    { name: "Honduras", universities: 3, x: "13%", y: "31%" },
    { name: "El Salvador", universities: 3, x: "12%", y: "32%" }
  ];

  const totalUniversities = countries.reduce((sum, country) => sum + country.universities, 0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Our Latin American Talent Network
      </h3>
      
      <div className="relative mx-auto max-w-2xl">
        {/* Map Background */}
        <div className="relative w-full h-96 bg-gradient-to-b from-blue-100 to-green-100 rounded-lg border-2 border-blue-200 overflow-hidden">
          {/* Latin America SVG Map */}
          <svg
            viewBox="0 0 500 400"
            className="absolute inset-0 w-full h-full opacity-30"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Mexico */}
            <path
              d="M50 80 L120 70 L140 90 L130 110 L90 115 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Central America */}
            <path
              d="M90 115 L140 110 L150 130 L140 140 L120 135 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Colombia */}
            <path
              d="M120 150 L160 145 L170 170 L155 185 L140 175 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Venezuela */}
            <path
              d="M160 145 L190 140 L200 160 L185 170 L170 165 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Brazil */}
            <path
              d="M170 190 L280 185 L320 220 L310 280 L250 290 L200 260 L175 220 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Peru */}
            <path
              d="M130 200 L170 195 L180 240 L160 260 L140 245 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Ecuador */}
            <path
              d="M110 180 L140 175 L150 195 L135 205 L120 200 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Bolivia */}
            <path
              d="M160 240 L200 235 L210 270 L190 285 L170 275 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Argentina */}
            <path
              d="M170 285 L220 280 L240 350 L210 365 L190 340 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Chile */}
            <path
              d="M150 270 L170 265 L190 340 L170 355 L155 320 Z"
              fill="#059669"
              opacity="0.8"
            />
            {/* Uruguay */}
            <path
              d="M220 315 L240 310 L245 330 L230 335 Z"
              fill="#059669"
              opacity="0.8"
            />
          </svg>
          
          {/* Country Markers */}
          {countries.map((country) => (
            <div
              key={country.name}
              className="absolute group cursor-pointer"
              style={{ left: country.x, top: country.y }}
            >
              <div className="relative">
                <MapPin className="w-6 h-6 text-orange-500 hover:text-orange-600 transition-colors" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {country.name}: {country.universities} universities
                </div>
              </div>
            </div>
          ))}

          {/* Map Labels */}
          <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-md">
            <h4 className="font-semibold text-sm text-gray-800 mb-2">Elite University Network</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <div>📍 15+ Countries</div>
              <div>🎓 {totalUniversities}+ Universities</div>
              <div>🌟 Top-tier Business Programs</div>
            </div>
          </div>

          {/* Geographic Regions */}
          <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-md">
            <h4 className="font-semibold text-sm text-gray-800 mb-2">Coverage Areas</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <div>🇲🇽 North: Mexico & Central America</div>
              <div>🇨🇴 Northwest: Colombia & Venezuela</div>
              <div>🇧🇷 Southeast: Brazil & Surroundings</div>
              <div>🇦🇷 South: Argentina, Chile, Uruguay</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-orange-500">150+</div>
          <div className="text-sm text-gray-600">Elite Universities</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-blue-500">15+</div>
          <div className="text-sm text-gray-600">Countries</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-green-500">C1/C2</div>
          <div className="text-sm text-gray-600">English Level</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-purple-500">24/7</div>
          <div className="text-sm text-gray-600">Time Zone Coverage</div>
        </div>
      </div>
    </div>
  );
};