import "./index.css" with { type: "css" };
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {TooltipProvider} from "~/components/ui/tooltip.tsx";
import { NuqsAdapter } from 'nuqs/adapters/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <TooltipProvider>
        <App/>
      </TooltipProvider>
    </NuqsAdapter>
  </StrictMode>,
)
