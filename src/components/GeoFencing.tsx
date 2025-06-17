
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Map, Plus } from "lucide-react";

const GeoFencing = () => {
  const geofences = [
    { id: 1, name: "Home Zone", status: "Active", alerts: 0, type: "Circle" },
    { id: 2, name: "Work Area", status: "Active", alerts: 2, type: "Polygon" },
    { id: 3, name: "School Zone", status: "Inactive", alerts: 0, type: "Circle" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Geo-Fencing</h1>
          <p className="text-gray-600 mt-1">Create and manage virtual boundaries for your vehicle</p>
        </div>
        <Button className="bg-trutrack-green hover:bg-trutrack-green/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Geo-fence
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Map className="w-5 h-5" />
                <span>Geo-fence Map</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg text-gray-600 mb-2">Interactive Geo-fence Map</p>
                    <p className="text-sm text-gray-500">Draw circles and polygons to create boundaries</p>
                    <p className="text-sm text-gray-500">Click and drag to define zones</p>
                  </div>
                </div>
                
                {/* Simulated Geo-fences */}
                <div className="absolute top-8 left-8 w-20 h-20 border-2 border-trutrack-green rounded-full opacity-50" />
                <div className="absolute bottom-12 right-12 w-16 h-16 border-2 border-trutrack-blue opacity-50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Geo-fence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fence-name">Fence Name</Label>
                <Input id="fence-name" placeholder="e.g., Home Zone" />
              </div>
              <div>
                <Label htmlFor="fence-type">Type</Label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Circle</option>
                  <option>Polygon</option>
                  <option>Rectangle</option>
                </select>
              </div>
              <div>
                <Label htmlFor="alert-type">Alert Type</Label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Entry & Exit</option>
                  <option>Entry Only</option>
                  <option>Exit Only</option>
                </select>
              </div>
              <Button className="w-full bg-trutrack-green hover:bg-trutrack-green/90">
                Save Geo-fence
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Geo-fences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {geofences.map((fence) => (
                  <div key={fence.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{fence.name}</h4>
                      <Badge variant={fence.status === 'Active' ? 'default' : 'secondary'}>
                        {fence.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Type: {fence.type}</p>
                      <p>Alerts: {fence.alerts}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GeoFencing;
