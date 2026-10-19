"use client";

import * as React from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface EditorNavbarProps {
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  title?: React.ReactNode;
  className?: string;
}

export function EditorNavbar({
  isSidebarOpen = false,
  onToggleSidebar,
  title,
  className,
}: EditorNavbarProps) {
  return (
    <header
      className={cn(
        "flex h-12 w-full shrink-0 items-center justify-between border-b border-surface-border bg-surface px-3 text-copy-primary",
        className
      )}
    >
      {/* Left section: sidebar toggle and optional title */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          className="text-copy-muted hover:bg-subtle hover:text-copy-primary"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : (
            <PanelLeftOpen className="h-4 w-4" />
          )}
        </Button>
        {title && <div className="text-sm font-medium">{title}</div>}
      </div>

      {/* Center section */}
      <div className="flex items-center justify-center">
        {/* Intentionally minimal placeholder for active design or document title */}
      </div>

      {/* Right section: stays empty for now */}
      <div className="flex items-center gap-2">
        {/* Reserved for future user profile, collaboration status, or share actions */}
      </div>
    </header>
  );
}
