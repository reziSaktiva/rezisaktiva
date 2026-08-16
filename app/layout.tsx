import type { Metadata } from "next";
import { ThemeModeProvider } from "./_components/theme-mode-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "rezisaktiva",
  description: "Portfolio site — bootstrap stub",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <ThemeModeProvider>{children}</ThemeModeProvider>
      </body>
    </html>
  );
}
