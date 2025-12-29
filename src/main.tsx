import { NuqsAdapter } from "nuqs/adapters/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TooltipProvider } from "~/components/ui/tooltip.tsx";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <NuqsAdapter>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </NuqsAdapter>
    </StrictMode>,
  );
}
