import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MarkerData {
  country: string;
  universities: number;
  lat: number;
  lng: number;
}

export const GoogleMapsLatinAmerica = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const markers: MarkerData[] = [
    { country: "Mexico", universities: 18, lat: 23.6345, lng: -102.5528 },
    { country: "Colombia", universities: 12, lat: 4.5709, lng: -74.2973 },
    { country: "Venezuela", universities: 8, lat: 6.4238, lng: -66.5897 },
    { country: "Brazil", universities: 25, lat: -14.2350, lng: -51.9253 },
    { country: "Peru", universities: 10, lat: -9.1900, lng: -75.0152 },
    { country: "Ecuador", universities: 6, lat: -1.8312, lng: -78.1834 },
    { country: "Argentina", universities: 15, lat: -38.4161, lng: -63.6167 },
    { country: "Chile", universities: 12, lat: -35.6751, lng: -71.5430 },
    { country: "Uruguay", universities: 4, lat: -32.5228, lng: -55.7658 },
    { country: "Costa Rica", universities: 5, lat: 9.7489, lng: -83.7534 },
    { country: "Panama", universities: 4, lat: 8.5380, lng: -80.7821 },
    { country: "Guatemala", universities: 6, lat: 15.7835, lng: -90.2308 },
  ];

  useEffect(() => {
    const initializeMap = async () => {
      try {
        // In a real implementation, this API key should come from Supabase secrets
        // For now, we'll show a placeholder message
        const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
        
        if (apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
          setError('Google Maps API key not configured. Please add your API key to use the interactive map.');
          return;
        }

        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places']
        });

        const google = await loader.load();
        
        if (!mapRef.current) return;

        const map = new google.maps.Map(mapRef.current, {
          center: { lat: -8.7832, lng: -55.4915 }, // Center of South America
          zoom: 4,
          styles: [
            {
              featureType: 'water',
              stylers: [{ color: '#a2daf2' }]
            },
            {
              featureType: 'landscape',
              stylers: [{ color: '#f5f5f2' }]
            },
            {
              featureType: 'road',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'poi',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });

        // Add markers for each country
        markers.forEach((markerData) => {
          const marker = new google.maps.Marker({
            position: { lat: markerData.lat, lng: markerData.lng },
            map: map,
            title: `${markerData.country}: ${markerData.universities} universities`,
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#f97316"/>
                  <circle cx="12" cy="10" r="3" fill="white"/>
                </svg>
              `),
              scaledSize: new google.maps.Size(32, 32),
            }
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 8px;">
                <h3 style="margin: 0 0 4px 0; color: #1f2937; font-weight: 600;">${markerData.country}</h3>
                <p style="margin: 0; color: #6b7280;">${markerData.universities} Elite Universities</p>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        setIsLoaded(true);
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Failed to load Google Maps. Please check your API key and internet connection.');
      }
    };

    initializeMap();
  }, []);

  if (error) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Our Latin American Talent Network
        </h3>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <div className="flex items-center">
            <div className="text-yellow-600 mr-3">⚠️</div>
            <div>
              <h4 className="text-sm font-medium text-yellow-800">Google Maps Integration</h4>
              <p className="text-sm text-yellow-700 mt-1">{error}</p>
            </div>
          </div>
        </div>

        {/* Fallback: Show static information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-4">Northern Region</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>🇲🇽 Mexico: 18 universities</li>
              <li>🇬🇹 Guatemala: 6 universities</li>
              <li>🇨🇷 Costa Rica: 5 universities</li>
              <li>🇵🇦 Panama: 4 universities</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-4">Southern Region</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>🇧🇷 Brazil: 25 universities</li>
              <li>🇦🇷 Argentina: 15 universities</li>
              <li>🇨🇱 Chile: 12 universities</li>
              <li>🇨🇴 Colombia: 12 universities</li>
              <li>🇵🇪 Peru: 10 universities</li>
            </ul>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Our Latin American Talent Network
      </h3>
      
      <div className="relative mx-auto max-w-4xl">
        <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-blue-200 shadow-lg">
          <div ref={mapRef} className="w-full h-full" />
        </div>
        
        {!isLoaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-blue-50 rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading interactive map...</p>
            </div>
          </div>
        )}
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