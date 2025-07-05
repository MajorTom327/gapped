import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {TooltipProvider} from "~/components/ui/tooltip.tsx";
import { NuqsAdapter } from 'nuqs/adapters/react-router/v6'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>

    <TooltipProvider>

      <RouterProvider router={router}/>
    </TooltipProvider>
    </NuqsAdapter>
  </StrictMode>,
)
