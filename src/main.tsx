import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {TooltipProvider} from "~/components/ui/tooltip.tsx";

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
    <TooltipProvider>

      <RouterProvider router={router}/>
    </TooltipProvider>
  </StrictMode>,
)
