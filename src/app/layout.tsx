import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { Wrapper } from "@/app/_components/wrapper";
import { Toaster } from "@/components/ui/toaster";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "./_providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "NextIQ Blur - Take your crypto wallet phrase, apply a hash function to it using a password, and store it in a secure location",
  description: "Take your crypto wallet phrase, apply a hash function to it using a password, and store it in a secure location. Secure your crypto wallet phrase with hashing. Decrypt your crypto wallet's hashed phrase. $0/Month. Ritchi Andria, @Moonlightlykos, Fullstack Developer. I really enjoy transforming ideas into functional software that exceeds expectation",
  icons: [{ rel: "icon", url: "/favicon.ico" }],

};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`font-sans ${inter.variable}`}>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <TRPCReactProvider>
          <Wrapper>{children}</Wrapper>
          <Toaster />
        </TRPCReactProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
