import "./styles/globals.css";
import type { Metadata } from "next";

import { cn } from "@/lib/cn";
import * as fonts from "./fonts";
import { Providers } from "./providers";
import { Header } from "./components/Header";

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
    <html lang="en" data-theme="dark">
      <body
        className={cn(
          fonts.interBold.variable,
          fonts.interSemibold.variable,
          fonts.interMedium.variable,
          fonts.interRegular.variable,
          fonts.interLight.variable,
          "antialiased",
          "h-screen w-full"
        )}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
