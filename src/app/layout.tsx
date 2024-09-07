import type { Metadata } from "next";
import { cn } from "@/lib/cn";
import * as fonts from "./fonts";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "SearchStax",
  description: "SearchStax app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fonts.geistSans.variable,
          fonts.geistMono.variable,
          "antialiased",
          "w-full h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}
