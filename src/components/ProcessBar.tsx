import { cn } from "@/lib/utils";

interface ProcessBarProps {
  currentStep: 'tare' | 'standard' | 'calibrate';
  className?: string;
}

const ProcessBar = ({ currentStep, className }: ProcessBarProps) => {
  const steps = [
    { id: 'tare', label: 'Tare' },
    { id: 'standard', label: 'Standard Weight' },
    { id: 'calibrate', label: 'Calibrate' }
  ];

  const getStepStatus = (stepId: string) => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    const stepIndex = steps.findIndex(step => step.id === stepId);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'inactive';
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="text-sm font-medium text-muted-foreground mb-4">Process Bar</div>
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-process-inactive -translate-y-1/2 z-0" />
        
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const isLast = index === steps.length - 1;
          
          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              {/* Step indicator */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-medium",
                  {
                    "bg-process-active border-process-active text-white": status === 'active',
                    "bg-process-completed border-process-completed text-white": status === 'completed',
                    "bg-background border-process-inactive text-muted-foreground": status === 'inactive',
                  }
                )}
              >
                {status === 'completed' ? '✓' : index + 1}
              </div>
              
              {/* Step label */}
              <span
                className={cn(
                  "mt-2 text-xs font-medium",
                  {
                    "text-process-active": status === 'active',
                    "text-process-completed": status === 'completed',
                    "text-muted-foreground": status === 'inactive',
                  }
                )}
              >
                {step.label}
              </span>
              
              {/* Progress line segment */}
              {!isLast && (
                <div
                  className={cn(
                    "absolute top-4 left-8 w-full h-0.5 -translate-y-1/2",
                    {
                      "bg-process-completed": status === 'completed',
                      "bg-process-inactive": status !== 'completed',
                    }
                  )}
                  style={{ width: 'calc(100% + 2rem)' }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessBar;