import * as React from "react";
import { Suspense } from "react";

interface AuthShellProps {
  children: React.ReactNode;
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="flex min-h-screen w-full bg-base text-copy-primary">
      {/* Left panel: large screens only */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between border-r border-surface-border bg-surface p-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-copy-primary">
              Flows AI
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-copy-primary">
              Real-time collaborative system design workspace.
            </h1>
            <p className="mt-2 text-sm text-copy-muted">
              Map systems from plain English, refine architectures with your team, and export technical specifications.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-copy-muted">
              Capabilities
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-copy-secondary">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span>Natural language architecture mapping</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span>Real-time collaborative canvas</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span>Curated starter design templates</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span>Automated Markdown spec generation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-xs text-copy-faint">
          System Design & Specification Platform
        </div>
      </div>

      {/* Right panel: centered Clerk form on all screens with Suspense boundary */}
      <div className="flex flex-1 items-center justify-center p-6">
        <Suspense
          fallback={
            <div className="h-96 w-full max-w-sm animate-pulse rounded-2xl bg-surface" />
          }
        >
          {children}
        </Suspense>
      </div>
    </div>
  );
}
