
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCcw, Plus } from "lucide-react";

const DeviceManagement = () => {
  const devices = [
    {
      id: 1,
      name: "Toyota Camry 2023",
      deviceId: "TT-001-ABC123",
      simNumber: "+1-555-0123",
      status: "Online",
      battery: 87,
      signal: 95,
      lastSeen: "2 minutes ago",
      firmware: "v2.1.5"
    },
    {
      id: 2,
      name: "Honda Civic 2022",
      deviceId: "TT-002-DEF456",
      simNumber: "+1-555-0124",
      status: "Offline",
      battery: 23,
      signal: 0,
      lastSeen: "2 hours ago",
      firmware: "v2.1.3"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Device Management</h1>
          <p className="text-gray-600 mt-1">Manage and monitor your TruTrack devices</p>
        </div>
        <Button className="bg-trutrack-green hover:bg-trutrack-green/90">
          <Plus className="w-4 h-4 mr-2" />
          Add New Device
        </Button>
      </div>

      {/* Device Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-trutrack-green">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-trutrack-green">1</div>
            <p className="text-sm text-gray-600">Online Devices</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">1</div>
            <p className="text-sm text-gray-600">Offline Devices</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-trutrack-blue">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-trutrack-blue">2</div>
            <p className="text-sm text-gray-600">Total Devices</p>
          </CardContent>
        </Card>
      </div>

      {/* Device List */}
      <div className="space-y-6">
        {devices.map((device) => (
          <Card key={device.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{device.name}</CardTitle>
                  <p className="text-gray-600">Device ID: {device.deviceId}</p>
                </div>
                <Badge variant={device.status === 'Online' ? 'default' : 'destructive'}>
                  {device.status === 'Online' && <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-slow" />}
                  {device.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Device Info */}
                <div>
                  <h4 className="font-medium mb-3">Device Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">SIM Number:</span>
                      <span className="font-mono">{device.simNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Firmware:</span>
                      <span>{device.firmware}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Seen:</span>
                      <span>{device.lastSeen}</span>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div>
                  <h4 className="font-medium mb-3">Status</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Battery</span>
                        <span>{device.battery}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${device.battery > 50 ? 'bg-trutrack-green' : device.battery > 20 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${device.battery}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Signal</span>
                        <span>{device.signal}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${device.signal > 70 ? 'bg-trutrack-blue' : device.signal > 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${device.signal}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Settings */}
                <div>
                  <h4 className="font-medium mb-3">Device Settings</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Configure
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Update Firmware
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Reset Device
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div>
                  <h4 className="font-medium mb-3">Actions</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <RefreshCcw className="w-4 h-4 mr-2" />
                      Refresh Status
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Rename Device
                    </Button>
                    <Button variant="destructive" size="sm" className="w-full">
                      Delete Device
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Device Form */}
      <Card>
        <CardHeader>
          <CardTitle>Add New Device</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="device-name">Device Name</Label>
                <Input id="device-name" placeholder="e.g., My Car Tracker" />
              </div>
              <div>
                <Label htmlFor="device-id">Device ID</Label>
                <Input id="device-id" placeholder="e.g., TT-003-GHI789" />
              </div>
              <div>
                <Label htmlFor="sim-number">SIM Number</Label>
                <Input id="sim-number" placeholder="e.g., +1-555-0125" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="vehicle-make">Vehicle Make</Label>
                <Input id="vehicle-make" placeholder="e.g., Toyota" />
              </div>
              <div>
                <Label htmlFor="vehicle-model">Vehicle Model</Label>
                <Input id="vehicle-model" placeholder="e.g., Camry 2023" />
              </div>
              <div>
                <Label htmlFor="license-plate">License Plate</Label>
                <Input id="license-plate" placeholder="e.g., ABC-1234" />
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-trutrack-green hover:bg-trutrack-green/90">
              Add Device
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeviceManagement;
