
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Map } from "lucide-react";

const History = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">History Playback</h1>
          <p className="text-gray-600 mt-1">View historical routes and vehicle activity</p>
        </div>
      </div>

      {/* Date and Time Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Select Time Range</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="start-date">Start Date</Label>
              <Input id="start-date" type="date" />
            </div>
            <div>
              <Label htmlFor="start-time">Start Time</Label>
              <Input id="start-time" type="time" />
            </div>
            <div>
              <Label htmlFor="end-date">End Date</Label>
              <Input id="end-date" type="date" />
            </div>
            <div>
              <Label htmlFor="end-time">End Time</Label>
              <Input id="end-time" type="time" />
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            <Button className="bg-trutrack-blue hover:bg-trutrack-blue/90">
              Load History
            </Button>
            <Button variant="outline">Today</Button>
            <Button variant="outline">Yesterday</Button>
            <Button variant="outline">Last 7 Days</Button>
          </div>
        </CardContent>
      </Card>

      {/* History Map and Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Map className="w-5 h-5" />
                <span>Route History</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg text-gray-600 mb-2">Historical Route Map</p>
                    <p className="text-sm text-gray-500">Shows vehicle path over selected time period</p>
                    <p className="text-sm text-gray-500">With start/stop markers and timeline</p>
                  </div>
                </div>
                
                {/* Simulated Route */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-trutrack-green rounded-full" />
                <div className="absolute top-12 left-16 w-24 h-1 bg-trutrack-blue opacity-50 transform rotate-45" />
                <div className="absolute bottom-12 right-12 w-3 h-3 bg-red-500 rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline and Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Playback Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center space-x-2">
                <Button variant="outline" size="sm">⏮</Button>
                <Button variant="outline" size="sm">⏸</Button>
                <Button variant="outline" size="sm">▶</Button>
                <Button variant="outline" size="sm">⏭</Button>
              </div>
              <div className="text-center text-sm text-gray-600">
                <p>Speed: 2x</p>
                <p>Progress: 45%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trip Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">2h 45m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Distance:</span>
                <span className="font-semibold">156 km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Speed:</span>
                <span className="font-semibold">57 km/h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max Speed:</span>
                <span className="font-semibold">89 km/h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Stops:</span>
                <span className="font-semibold">3</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;
