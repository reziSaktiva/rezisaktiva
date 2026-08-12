import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rezisaktiva",
  description: "Portfolio site — bootstrap stub",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
