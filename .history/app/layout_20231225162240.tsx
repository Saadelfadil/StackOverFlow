import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "./globles.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack Over Flow Clone",
  description: "Stack Over Flow Clone",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

const inter = Inter({
  
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex min-h-screen w-full items-center justify-center">
          <h1 className="h1-bold">this is some words</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
