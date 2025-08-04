import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ConnectionPage = () => {
  const navigate = useNavigate();
  const [ipAddress, setIpAddress] = useState("");
  const [port, setPort] = useState("");
  const [channelType, setChannelType] = useState("single");

  const handleConnect = () => {
    // For testing phase, directly navigate to weight monitoring
    navigate("/weight-monitor");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">Weight Calibration Utility</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="ip-address">IP Address</Label>
            <Input
              id="ip-address"
              placeholder="Provide IP address for the Weight sensor to connect to"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="port">Port</Label>
            <Input
              id="port"
              value={port}
              onChange={(e) => setPort(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            <Label>Channel Configuration</Label>
            <RadioGroup value={channelType} onValueChange={setChannelType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="single" id="single" />
                <Label htmlFor="single">Single Channel (TLB)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4-channel" id="4-channel" />
                <Label htmlFor="4-channel">4 - Channel (TLB4)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="8-channel" id="8-channel" />
                <Label htmlFor="8-channel">8 - Channel (TLB8)</Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            onClick={handleConnect}
            className="w-full"
            size="lg"
          >
            Connect
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConnectionPage;