import { cn } from "@/lib/utils";

interface StatChipProps {
  text: string;
  className?: string;
}

export function StatChip({ text, className }: StatChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium",
        className
      )}
      style={{
        borderColor: 'var(--brand-line)',
        backgroundColor: 'var(--brand-panel)',
        color: 'var(--brand-text)',
      }}
    >
      <span className="flex h-2 w-2 items-center justify-center">
        <span className="bg-brand-gradient h-2 w-2 rounded-full" />
      </span>
      {text}
    </div>
  );
}
