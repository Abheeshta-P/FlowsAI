import { auth } from "@clerk/nextjs/server";

export const instant = false;

export default async function EditorPage() {
  await auth.protect();

  return (
    <div className="flex flex-1 items-center justify-center">
      <div>Flows AI</div>
    </div>
  );
}
