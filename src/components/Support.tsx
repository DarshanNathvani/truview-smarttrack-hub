
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { User } from "lucide-react";

const Support = () => {
  const faqs = [
    {
      question: "How do I install the TruTrack device in my vehicle?",
      answer: "The TruTrack device can be easily installed by connecting it to your vehicle's OBD-II port, typically located under the dashboard. For hardwired installation, please contact our certified installation partners."
    },
    {
      question: "Why is my device showing as offline?",
      answer: "Your device may appear offline due to poor cellular coverage, low battery, or connectivity issues. Check the device's LED status and ensure it's properly connected. If the issue persists, contact support."
    },
    {
      question: "How accurate is the GPS tracking?",
      answer: "TruTrack provides GPS accuracy within 3-5 meters under optimal conditions. Accuracy may vary in areas with poor satellite coverage such as underground parking or dense urban areas."
    },
    {
      question: "Can I track multiple vehicles with one account?",
      answer: "Yes, you can add multiple TruTrack devices to your account. Each device will appear separately in your dashboard with individual tracking and alert settings."
    },
    {
      question: "How do I set up geo-fence alerts?",
      answer: "Navigate to the Geo-Fencing section in your dashboard, draw boundaries on the map, name your fence, and configure alert preferences. You'll receive notifications when your vehicle enters or exits these areas."
    },
    {
      question: "What should I do if my vehicle is stolen?",
      answer: "Immediately contact local law enforcement and provide them with your vehicle's real-time location from the TruTrack dashboard. Our support team can also assist with emergency tracking."
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Support & Help</h1>
          <p className="text-gray-600 mt-1">Get help with your TruTrack device and dashboard</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Contact Support</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Email Support</h4>
              <p className="text-trutrack-blue">support@truvibe.com</p>
              <p className="text-sm text-gray-600">Response time: 24-48 hours</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Phone Support</h4>
              <p className="text-trutrack-blue">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-600">Mon-Fri: 9AM-6PM PST</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Emergency Support</h4>
              <p className="text-red-600">+1 (555) 999-HELP</p>
              <p className="text-sm text-gray-600">24/7 for stolen vehicles</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your issue in detail..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-trutrack-blue hover:bg-trutrack-blue/90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">User Manual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Complete guide to using your TruTrack device and dashboard.</p>
            <Button variant="outline" className="w-full">
              Download PDF
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Video Tutorials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Step-by-step video guides for installation and setup.</p>
            <Button variant="outline" className="w-full">
              Watch Videos
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Community Forum</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Connect with other TruTrack users and share experiences.</p>
            <Button variant="outline" className="w-full">
              Visit Forum
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-trutrack-green rounded-full" />
              <div>
                <p className="font-medium">GPS Tracking</p>
                <p className="text-sm text-gray-600">Operational</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-trutrack-green rounded-full" />
              <div>
                <p className="font-medium">Data Services</p>
                <p className="text-sm text-gray-600">Operational</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-trutrack-green rounded-full" />
              <div>
                <p className="font-medium">Alert System</p>
                <p className="text-sm text-gray-600">Operational</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center py-6 border-t border-gray-200">
        <p className="text-gray-600 mb-2">TruTrack - Anti-Theft Smart Car Tracker</p>
        <p className="text-sm text-gray-500">© 2025 TruVibe | TruTrack</p>
      </div>
    </div>
  );
};

export default Support;
