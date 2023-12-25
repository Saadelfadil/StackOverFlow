import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "./globles.css";
import {Inter} from "next"
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
