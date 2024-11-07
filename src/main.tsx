import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ProjectPage from './routes/project.tsx'
import Root from './routes/root.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/project/:slug',
    element: <ProjectPage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '*', 
    element: <div>404 Not Found</div>
  }
  
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>
)