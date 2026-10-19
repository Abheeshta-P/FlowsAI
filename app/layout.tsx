import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flows AI",
  description: "Real-time collaborative system design workspace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
        variables: {
          colorPrimary: "var(--accent-primary)",
          colorPrimaryForeground: "var(--bg-base)",
          colorBackground: "var(--bg-surface)",
          colorInput: "var(--bg-subtle)",
          colorInputForeground: "var(--text-primary)",
          colorForeground: "var(--text-primary)",
          colorMutedForeground: "var(--text-secondary)",
          colorNeutral: "white",
          colorBorder: "var(--border-default)",
          colorRing: "var(--accent-ai)",
          colorDanger: "var(--state-error)",
          colorSuccess: "var(--state-success)",
          colorWarning: "var(--state-warning)",
          borderRadius: "0.75rem",
          fontFamily: "var(--font-geist-sans), sans-serif",
        },
        elements: {
          card: "border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl rounded-2xl",
          cardBox: "border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl rounded-2xl",
          avatarBox:
            "border border-[var(--border-default)] bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold",
          userButtonAvatarBox:
            "border border-[var(--border-default)] bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold",
          userButtonTrigger: "text-[var(--text-primary)] hover:opacity-90",
          userButtonOuterIdentifier: "text-[var(--text-primary)] font-medium",
          userPreviewMainIdentifier: "text-[var(--text-primary)] font-semibold",
          userPreviewSecondaryIdentifier: "text-[var(--text-secondary)]",
          socialButtonsBlockButton:
            "border border-[var(--border-default)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]",
          formButtonPrimary:
            "bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 font-medium",
          formFieldInput:
            "border border-[var(--border-default)] bg-[var(--bg-subtle)] text-[var(--text-primary)] focus:border-[var(--accent-ai)]",
          footerActionLink: "text-[var(--accent-ai-text)] hover:underline",
          identityPreviewText: "text-[var(--text-primary)]",
          userButtonPopoverCard:
            "border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl rounded-2xl",
        },
      }}
    >
      <html
        lang="en"
        className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="h-full bg-base text-copy-primary">{children}</body>
      </html>
    </ClerkProvider>
  );
}
