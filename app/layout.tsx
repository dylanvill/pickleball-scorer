import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "../components/ui/provider";
import { Box } from "@chakra-ui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pickleball Scorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Box
            p={4}
            backgroundColor="bg.subtle"
            height="full"
            minHeight="100vh"
            as="main"
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Box maxWidth="lg" margin="0 auto">
              {children}
            </Box>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
