import type { Metadata } from "next";
import ClientWrapper from "./shared-components/client/wrapper";
import LayoutClient from "./shared-components/client/layout";
import "./globals.css";
export const metadata: Metadata = {
  title: "Exclusive",
  description: "E-commerce site",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <LayoutClient>{children}</LayoutClient>
        </ClientWrapper>
      </body>
    </html>
  );
}
