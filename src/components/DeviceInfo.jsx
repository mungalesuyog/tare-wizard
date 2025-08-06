import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DeviceInfo = ({ data }) => {
  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  const formatValue = (key, value) => {
    if (key === 'weightDivision') {
      return value.replace('_', '1/');
    }
    if (key === 'yearOfManufacture') {
      return `20${value}`;
    }
    return value;
  };

  const getValueColor = (key) => {
    switch (key) {
      case 'weightUnitType':
        return 'bg-primary text-primary-foreground';
      case 'firmwareVersion':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Device Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 rounded-lg border">
              <span className="text-sm font-medium text-muted-foreground">
                {formatLabel(key)}:
              </span>
              <Badge className={getValueColor(key)}>
                {formatValue(key, value)}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DeviceInfo;