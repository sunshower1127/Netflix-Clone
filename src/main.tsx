import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Router from "./pages/__router";
import { ThemeProvider } from "./theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Router />
    </ThemeProvider>
  </StrictMode>
);
