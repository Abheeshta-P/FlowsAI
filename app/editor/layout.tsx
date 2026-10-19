import { auth } from "@clerk/nextjs/server";
import { EditorLayout } from "@/components/editor/editor-layout";

export default async function EditorRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await auth.protect();

  return <EditorLayout>{children}</EditorLayout>;
}
