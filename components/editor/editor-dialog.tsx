"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface EditorDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

/**
 * Reusable dialog pattern supporting title, description, content body,
 * and footer action slots styled with dark technical workspace theme tokens.
 */
export function EditorDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: EditorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "rounded-3xl border border-surface-border bg-elevated text-copy-primary shadow-2xl backdrop-blur-md sm:max-w-md",
          className
        )}
      >
        {(title || description) && (
          <DialogHeader>
            {title && (
              <DialogTitle className="text-base font-semibold text-copy-primary">
                {title}
              </DialogTitle>
            )}
            {description && (
              <DialogDescription className="text-sm text-copy-muted">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}
        {children}
        {footer && (
          <DialogFooter className="border-t border-surface-border bg-subtle/40 px-4 py-3">
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
