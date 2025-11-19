import { cn } from "@/lib/utils";

interface GradientRuleProps {
  className?: string;
}

export function GradientRule({ className }: GradientRuleProps) {
  return <div className={cn("gradient-hairline w-full", className)} />;
}
