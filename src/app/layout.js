import { twkLausannePan } from "../app/font/font.js";
import RootLayoutClient from "@/app/rootLayoutClient";
import { theme } from "./lib/theme.js";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={twkLausannePan.className}>
        <RootLayoutClient theme={theme}>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
