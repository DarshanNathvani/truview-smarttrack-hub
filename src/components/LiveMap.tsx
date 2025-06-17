
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, RefreshCcw } from "lucide-react";

const LiveMap = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Live Map Tracking</h1>
          <p className="text-gray-600 mt-1">Real-time vehicle location and status</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <RefreshCcw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button className="bg-trutrack-blue hover:bg-trutrack-blue/90">
            Center on Vehicle
          </Button>
        </div>
      </div>

      {/* Map Container */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center space-x-2">
              <Map className="w-5 h-5" />
              <span>Vehicle Location</span>
            </CardTitle>
            <Badge className="bg-trutrack-green/10 text-trutrack-green border-trutrack-green/20">
              <div className="w-2 h-2 bg-trutrack-green rounded-full mr-2 animate-pulse-slow" />
              Live Tracking
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Large Map Placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <Map className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 mb-2">Interactive Live Map</p>
                <p className="text-sm text-gray-500">Integration with Mapbox/Google Maps</p>
                <p className="text-sm text-gray-500">Real-time GPS tracking with direction indicator</p>
              </div>
            </div>
            
            {/* Vehicle Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-trutrack-blue rounded-full border-3 border-white shadow-lg animate-pulse-slow relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-trutrack-green rounded-full border border-white" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Controls and Info with Firebase IDs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Speed:</span>
              <span id="speed" className="font-semibold">45 km/h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Direction:</span>
              <span className="font-semibold">Northeast</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Altitude:</span>
              <span className="font-semibold">245m</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Location Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <span className="text-gray-600 text-sm">Address:</span>
              <p id="address" className="font-semibold">123 Main Street, Downtown</p>
            </div>
            <div>
              <span className="text-gray-600 text-sm">Coordinates:</span>
              <p className="font-mono text-sm">
                <span id="latitude">40.7128</span>, <span id="longitude">-74.0060</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Map Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full">
              Satellite View
            </Button>
            <Button variant="outline" className="w-full">
              Traffic Layer
            </Button>
            <Button variant="outline" className="w-full">
              Show Route
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LiveMap;
