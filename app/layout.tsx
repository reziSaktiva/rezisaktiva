import type { Metadata } from "next";
import { Theme } from "@astryxdesign/core/theme";
import { neutralTheme } from "@astryxdesign/theme-neutral/built";
import "./globals.css";

export const metadata: Metadata = {
  title: "rezisaktiva",
  description: "Portfolio site — bootstrap stub",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Theme theme={neutralTheme} mode="light">
          {children}
        </Theme>
      </body>
    </html>
  );
}
