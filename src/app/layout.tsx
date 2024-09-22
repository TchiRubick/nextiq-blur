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
  title: "NextIQ Blur - Take any phrase, apply a hash function to it using a passkey, and store it in a secure (or not) location",
  description: "Take any phrase, apply a hash function to it using a passkey, and store it in a secure (or not) location. Secure your phrase with hashing. Decrypt your hashed phrase. $0/Month. Ritchi Andria, @Moonlightlykos, Fullstack Developer. I really enjoy transforming ideas into functional software that exceeds expectation",
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
