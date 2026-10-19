import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  withContainer?: boolean;
}

export function LogoIcon({
  size = 32,
  withContainer = true,
  className,
  ...props
}: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      className={cn("shrink-0", className)}
      aria-label="Flows AI emblem"
      {...props}
    >
      {withContainer && (
        <rect
          width="32"
          height="32"
          rx="8"
          className="fill-surface stroke-surface-border"
          strokeWidth="1.2"
        />
      )}

      {/* Architectural Flow Lines forming the 'F' glyph */}
      <path
        d="M10 23V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-copy-muted"
      />
      <path
        d="M10 10H21"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 16H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-copy-muted"
      />

      {/* System Architecture Nodes */}
      {/* Root input node */}
      <circle cx="10" cy="23" r="2.25" className="fill-copy-primary" />
      {/* Middle stem junction */}
      <circle cx="10" cy="16" r="2" className="fill-copy-secondary" />
      {/* Middle branch node */}
      <circle cx="18" cy="16" r="2" className="fill-copy-muted" />
      {/* Top stem junction */}
      <circle cx="10" cy="10" r="2" className="fill-copy-secondary" />

      {/* AI Terminal Node with active accent */}
      <circle cx="21" cy="10" r="3.2" fill="#6366f1" />
      <circle cx="21" cy="10" r="1.2" fill="#ffffff" />
    </svg>
  );
}

export interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

export function Logo({
  size = 32,
  showText = true,
  className,
  textClassName,
}: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <LogoIcon size={size} />
      {showText && (
        <div className={cn("flex items-center tracking-tight", textClassName)}>
          <span className="text-lg font-bold text-copy-primary">Flows</span>
          <span className="text-lg font-bold text-brand ml-1">AI</span>
          <span className="ml-2 rounded border border-surface-border bg-subtle px-1.5 py-0.2 text-[10px] font-medium uppercase tracking-wider text-copy-muted">
            Beta
          </span>
        </div>
      )}
    </div>
  );
}
