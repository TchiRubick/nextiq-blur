"use client"
import { ThemeProvider } from "@/app/_providers/theme-provider";
import type { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
  >
    <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
  </ThemeProvider>
);
