import * as React from "react";
import { Suspense } from "react";
import { Sparkles, Users, Layers, FileCode2 } from "lucide-react";
import { Logo } from "@/components/brand/logo";

interface AuthShellProps {
  children: React.ReactNode;
}

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "Natural language architecture mapping",
    description: "Translate prompts into structured component topologies and schemas.",
  },
  {
    icon: Users,
    title: "Real-time collaborative canvas",
    description: "Multiplayer workspace with live presence and synchronized state.",
  },
  {
    icon: Layers,
    title: "Curated starter templates",
    description: "Battle-tested blueprints for distributed systems and microservices.",
  },
  {
    icon: FileCode2,
    title: "Automated Markdown technical specs",
    description: "Instantly compile canvas nodes into production technical documentation.",
  },
];

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="flex min-h-screen lg:h-screen lg:overflow-hidden w-full bg-base text-copy-primary">
      {/* Left panel: technical branding & feature overview (non-scrollable on desktop) */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between border-r border-surface-border bg-surface p-8 xl:p-10 lg:h-screen lg:overflow-hidden">
        {/* Top: Brand Logo */}
        <div>
          <Logo size={30} />
        </div>

        {/* Middle: Compact value proposition & thin capability cards */}
        <div className="my-auto max-w-lg space-y-4 py-2">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-copy-primary xl:text-3xl">
              Real-time collaborative system design workspace.
            </h1>
            <p className="text-xs xl:text-sm text-copy-muted leading-relaxed">
              Describe systems in plain English, map architectures automatically, collaborate with your engineering team, and export production specifications.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-copy-faint">
              Core Capabilities
            </p>
            <div className="grid gap-2">
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="group flex items-center gap-3 rounded-lg border border-surface-border/60 bg-subtle/50 px-3 py-2 transition-colors hover:border-surface-border hover:bg-subtle"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-surface-border bg-surface text-brand">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-xs font-medium text-copy-primary">
                        {cap.title}
                      </h2>
                      <p className="text-[11px] text-copy-muted truncate leading-tight">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom: Subdued technical footer */}
        <div className="flex items-center justify-between border-t border-surface-border/60 pt-4 text-xs text-copy-muted">
          <span>Flows AI Platform</span>
          <span className="font-mono text-copy-faint text-[11px]">v0.1.0</span>
        </div>
      </div>

      {/* Right panel: Centered Clerk form with mobile brand header */}
      <div className="flex flex-1 flex-col items-center justify-center p-6 sm:p-10 overflow-y-auto">
        {/* Mobile-only brand header */}
        <div className="mb-6 lg:hidden">
          <Logo size={32} />
        </div>

        <div className="w-full max-w-md">
          <Suspense
            fallback={
              <div className="h-96 w-full animate-pulse rounded-2xl border border-surface-border bg-surface" />
            }
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
