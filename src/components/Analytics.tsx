
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart } from "lucide-react";

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive vehicle usage statistics and insights</p>
        </div>
        <Badge className="bg-trutrack-blue/10 text-trutrack-blue border-trutrack-blue/20">
          Last 30 Days
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-trutrack-blue">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Distance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">2,847 km</div>
            <p className="text-sm text-trutrack-green mt-1">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-trutrack-green">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Average Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">52 km/h</div>
            <p className="text-sm text-gray-500 mt-1">Consistent with avg</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Idling Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">14.2 hrs</div>
            <p className="text-sm text-red-500 mt-1">-8% improvement</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">23</div>
            <p className="text-sm text-red-500 mt-1">+5 from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Distance Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart className="w-5 h-5" />
              <span>Weekly Distance Traveled</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2 p-4">
              {[120, 180, 150, 200, 175, 190, 165].map((height, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div 
                    className="w-8 bg-gradient-to-t from-trutrack-blue to-trutrack-blue/60 rounded-t"
                    style={{ height: `${height}px` }}
                  />
                  <span className="text-xs text-gray-600">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Speed Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Speed Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { range: '0-30 km/h', percentage: 25, color: 'trutrack-green' },
                { range: '31-60 km/h', percentage: 45, color: 'trutrack-blue' },
                { range: '61-90 km/h', percentage: 25, color: 'yellow-500' },
                { range: '90+ km/h', percentage: 5, color: 'red-500' }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.range}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-${item.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Trips:</span>
              <span className="font-semibold">87</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Trip:</span>
              <span className="font-semibold">32.7 km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Longest Trip:</span>
              <span className="font-semibold">245 km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fuel Efficiency:</span>
              <span className="font-semibold">8.5 L/100km</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alert Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Speed Alerts:</span>
              <span className="font-semibold text-red-500">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Geo-fence:</span>
              <span className="font-semibold text-yellow-500">7</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Motion:</span>
              <span className="font-semibold text-trutrack-blue">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Battery:</span>
              <span className="font-semibold text-orange-500">1</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Patterns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Peak Hours:</span>
              <span className="font-semibold">8-9 AM, 5-6 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Most Active Day:</span>
              <span className="font-semibold">Friday</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Parking Time:</span>
              <span className="font-semibold">18.5 hrs/day</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Weekend Usage:</span>
              <span className="font-semibold">35% of total</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
