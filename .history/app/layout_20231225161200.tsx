import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "./globles.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

export const metadata: MetaData = {
  title: "Stack Over Flow Clone",
  Description: "Stack Over Flow Clone",
  icons: {
    icon: "/public/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex min-h-screen w-full items-center justify-center">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
