"use client";
import StyledComponentsRegistry from "@/app/lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/app/lib/theme";

export default function RootLayoutClient({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}