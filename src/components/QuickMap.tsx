
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

const QuickMap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Map className="w-5 h-5" />
          <span>Current Location</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Map Placeholder */}
        <div className="relative">
          <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center">
              <Map className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Interactive Map</p>
              <p className="text-xs text-gray-500">Real-time location tracking</p>
            </div>
          </div>
          
          {/* Vehicle Marker Simulation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-trutrack-blue rounded-full border-2 border-white shadow-lg animate-pulse-slow" />
          </div>
        </div>

        {/* Location Info with Firebase IDs */}
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Address:</span>
            <span id="address" className="font-medium">123 Main St, City</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Coordinates:</span>
            <span className="font-medium font-mono">
              <span id="latitude">40.7128</span>, <span id="longitude">-74.0060</span>
            </span>
          </div>
        </div>

        <Button className="w-full mt-4 bg-trutrack-blue hover:bg-trutrack-blue/90">
          View Full Map
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickMap;
