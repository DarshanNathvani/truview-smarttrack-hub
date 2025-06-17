
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const VehicleStats = () => {
  const vehicleData = {
    name: "Toyota Camry 2023",
    licensePlate: "ABC-1234",
    speed: 45,
    ignition: "On",
    motion: "Moving",
    battery: 87,
    signal: 95,
    lastUpdate: "2 minutes ago"
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">Vehicle Status</CardTitle>
            <p className="text-gray-600 mt-1">{vehicleData.name} • {vehicleData.licensePlate}</p>
          </div>
          <Badge className="bg-trutrack-green/10 text-trutrack-green border-trutrack-green/20">
            <div className="w-2 h-2 bg-trutrack-green rounded-full mr-2 animate-pulse-slow" />
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Speed and Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-trutrack-blue mb-2">{vehicleData.speed}</div>
            <div className="text-sm text-gray-600">km/h</div>
            <div className="text-xs text-gray-500 mt-1">Current Speed</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 mb-2">{vehicleData.ignition}</div>
            <div className="w-4 h-4 bg-trutrack-green rounded-full mx-auto mb-1" />
            <div className="text-xs text-gray-500">Ignition</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 mb-2">{vehicleData.motion}</div>
            <div className="w-4 h-4 bg-trutrack-blue rounded-full mx-auto mb-1 animate-pulse-slow" />
            <div className="text-xs text-gray-500">Motion Status</div>
          </div>
        </div>

        {/* Battery and Signal */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Battery Level</span>
              <span className="text-sm text-gray-600">{vehicleData.battery}%</span>
            </div>
            <Progress value={vehicleData.battery} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">GSM Signal</span>
              <span className="text-sm text-gray-600">{vehicleData.signal}%</span>
            </div>
            <Progress value={vehicleData.signal} className="h-2" />
          </div>
        </div>

        {/* Last Update */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-600">Last Update</span>
          <span className="text-sm font-medium text-gray-900">{vehicleData.lastUpdate}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleStats;
