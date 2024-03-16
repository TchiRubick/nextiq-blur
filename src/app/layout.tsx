import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { Wrapper } from "@/app/_components/wrapper";
import { Toaster } from "@/components/ui/toaster";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`font-sans ${inter.variable}`}>
      <TRPCReactProvider>
        <Wrapper>{children}</Wrapper>
        <Toaster />
      </TRPCReactProvider>
    </body>
  </html>
);

export default RootLayout;
