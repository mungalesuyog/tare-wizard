import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProcessBar from "@/components/ProcessBar";

const CalibrationPage = () => {
  const navigate = useNavigate();
  const [currentWeight, setCurrentWeight] = useState("0.00");
  const [status, setStatus] = useState("Ready for Calibration");

  // Simulate real-time weight data
  useEffect(() => {
    const interval = setInterval(() => {
      const weight = (Math.random() * 100).toFixed(2);
      setCurrentWeight(weight);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleDoCalibrate = () => {
    // After calibration, go back to weight monitor
    navigate("/weight-monitor");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">Weight Calibration Utility</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-weight">Current Weight From Sensor</Label>
              <Input
                id="current-weight"
                value={`${currentWeight} kg`}
                readOnly
                className="text-center font-mono text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status:</Label>
              <Input
                id="status"
                value={status}
                readOnly
                className="text-center"
              />
            </div>
          </div>

          <ProcessBar currentStep="calibrate" className="my-8" />

          <Button 
            onClick={handleDoCalibrate}
            className="w-full"
            size="lg"
          >
            Do Calibrate
          </Button>
          
          <div className="text-xs text-muted-foreground text-center">
            This will calibrate the weight sensor with the standard weight provided.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalibrationPage;