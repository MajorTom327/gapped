import { NuqsAdapter } from "nuqs/adapters/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TooltipProvider } from "~/components/ui/tooltip.tsx";
import App from "./App.tsx";
import { ThemeProvider } from "./store/theme.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <NuqsAdapter>
        <ThemeProvider>
          <TooltipProvider>
            <App />
          </TooltipProvider>
        </ThemeProvider>
      </NuqsAdapter>
    </StrictMode>,
  );
}
