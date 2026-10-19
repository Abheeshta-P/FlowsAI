"use client";

import * as React from "react";
import { FolderGit2, Plus, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewProject?: () => void;
  className?: string;
}

export function ProjectSidebar({
  isOpen,
  onClose,
  onNewProject,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      aria-label="Projects Sidebar"
      aria-hidden={!isOpen}
      className={cn(
        "fixed top-14 left-3 bottom-3 z-40 flex w-80 max-w-[calc(100vw-1.5rem)] flex-col rounded-2xl border border-surface-border bg-surface/95 shadow-2xl backdrop-blur-md transition-all duration-300 ease-in-out",
        isOpen
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none -translate-x-[calc(100%+2rem)] opacity-0",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
        <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close projects sidebar"
          className="text-copy-muted hover:bg-subtle hover:text-copy-primary"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="my-projects" className="flex flex-1 flex-col overflow-hidden px-3 pt-3">
        <TabsList className="grid w-full grid-cols-2 bg-subtle">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="flex flex-1 flex-col items-center justify-center p-6 text-center outline-none">
          <FolderGit2 className="mb-2 h-8 w-8 text-copy-faint" />
          <p className="text-sm font-medium text-copy-muted">No projects yet</p>
          <p className="mt-1 text-xs text-copy-faint">
            Create your first architecture project to get started.
          </p>
        </TabsContent>

        <TabsContent value="shared" className="flex flex-1 flex-col items-center justify-center p-6 text-center outline-none">
          <Users className="mb-2 h-8 w-8 text-copy-faint" />
          <p className="text-sm font-medium text-copy-muted">No shared projects</p>
          <p className="mt-1 text-xs text-copy-faint">
            Projects shared with you will appear here.
          </p>
        </TabsContent>
      </Tabs>

      {/* Footer action */}
      <div className="border-t border-surface-border p-3">
        <Button
          className="w-full gap-2 rounded-xl"
          onClick={onNewProject}
        >
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
